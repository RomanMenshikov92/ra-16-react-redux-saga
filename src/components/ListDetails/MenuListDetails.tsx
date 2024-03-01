import { useState } from "react";
import { NavLink } from "react-router-dom";

export const MenuListDetails: React.FC = () => {
  const [isEntered, setIsEntered] = useState(false);

  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? "list-details__menu-active" : "list-details__menu");

  return (
    <nav className="list-details__nav-menu">
      {!isEntered && (
        <NavLink className={activeLink} to="/ra-16-react-redux-saga/list-details" onClick={() => setIsEntered(true)}>
          Перейти в список
        </NavLink>
      )}
      {isEntered && (
        <NavLink className={activeLink} to="/ra-16-react-redux-saga" onClick={() => setIsEntered(false)}>
          Выйти из списка
        </NavLink>
      )}
    </nav>
  );
};
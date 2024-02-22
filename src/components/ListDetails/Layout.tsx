import { Outlet } from "react-router-dom";
import { MenuListDetails } from "./MenuListDetails";
import "./list-details.css";

export const Layout: React.FC = () => {
  return (
    <div className="list-details">
      <MenuListDetails></MenuListDetails>
      <main className="list-details__main">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;

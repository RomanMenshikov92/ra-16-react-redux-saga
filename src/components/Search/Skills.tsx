import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "./actions/actionCreator";
import { RootState, Skill } from "./types/types";
import "./search.css";

export function Skills() {
  const { items, loading, error, search } = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };
  const hasQuery = search.trim() !== "";

  return (
    <div className="search">
      <label htmlFor="search" className="search__label">
        <input id="search" className="search__input input-reset" type="search" placeholder="Введите слово, начинающее на букву R" value={search} onChange={handleSearch} />
      </label>
      {!hasQuery && <div className="search__empty">Type something to search</div>}
      {hasQuery && loading && <div className="search__load">loading...</div>}
      {error ? (
        <div className="search__error">Error occured</div>
      ) : (
        hasQuery && <ul className="search__list list-reset">
          {items.map((o: Skill, index: number) => (
            <li className="search__item" key={o.id}>
              {index + 1}. {o.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Skills;

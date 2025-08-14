import { CiSearch } from "react-icons/ci";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch, initialValue = "" }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    onSearch(query);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        defaultValue={initialValue}
        className={css.input}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by title"
      />
      <button className={css.button} type="submit">
        <CiSearch color="black" />
      </button>
    </form>
  );
}

import "./styles.scss";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__bar"
          placeholder="O que você está buscando ?"
          type="text"
        />
      </div>
    </div>
  );
}

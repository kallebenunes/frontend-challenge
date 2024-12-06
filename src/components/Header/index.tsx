import Logo from "../Logo";
import SearchBar from "../SearchBar";
import burguerSrc from "./../../assets/burguer.svg";
import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <button className="header__open-button">
          <img src={burguerSrc} alt="" />
        </button>
        <Logo />
        <SearchBar />
        <nav className="header-nav">
          <button className="header-nav__item">Minha conta </button>
          <button className="header-nav__item">Minicart</button>
        </nav>
      </div>
    </header>
  );
}

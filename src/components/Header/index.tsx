import Logo from "../Logo";
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
        <div className="header__search-container">
          <div className="header__search">
            <input className="header__search-bar" type="text" />
          </div>
        </div>
        <nav className="header-nav">
          <button className="header-nav__item">Minha conta </button>
          <button className="header-nav__item">Minicart</button>
        </nav>
      </div>
    </header>
  );
}

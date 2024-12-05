import Image from "../Image";
import logoSrc from "./../../assets/logo.png";

export default function Logo() {
  return (
    <span className="logo-container">
      <Image
        alt="Corebiz."
        fetchPriority="high"
        height="auto"
        width="100%"
        loading="eager"
        src={logoSrc}
        className="logo-img"
      />
    </span>
  );
}

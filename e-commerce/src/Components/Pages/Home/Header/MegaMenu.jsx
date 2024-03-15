import "./Header.css";
import { Button } from "flowbite-react";
const MegaMenu = () => {
  return (
    <div className="mega-dropdown-wrapper">
      <div className="mega-menu-left">
        <ul className="categories-items">
          <li className="categories-item">
            <a href="#">Moda</a>
          </li>
          <li className="categories-item">
            <a href="#">Teknoloji</a>
          </li>
          <li className="categories-item">
            <a href="#">Kozmetik</a>
          </li>
          <li className="categories-item">
            <a href="#">Ev - Yaşam</a>
          </li>
          <li className="categories-item">
            <a href="#">Kitap - Hobi</a>
          </li>
        </ul>
      </div>

      <div className="mega-menu-right">
        <img src="/images/mega-menu.png" alt="" />

        <div className="button-wrapper-mega-menu">
          <Button gradientDuoTone="tealToLime">Şimdi Keşfet</Button>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

import React from "react";
import { useState, useEffect } from "react";
import ImageIconHeader from "../../assets/brand-ico.png";
import "./Header.css";
import SvgMenu from '../../assets/menu-icon.png'
import SvgMenuClose from '../../assets/menu-close.svg'

export default ({black}) => {
  const [menu, setMenu] = useState(false);

  const ToogleMode = () => {
    setMenu(!menu);
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="content--header">
        <div className="header--logo">
          <img src={ImageIconHeader} alt="" />
        </div>

        <div className={menu ? 'iconDisable' : 'icon'} onClick={ToogleMode}>
            <img src={SvgMenu} alt="" />
        </div>

        <div className={menu ? 'iconActive' : 'iconClose'} onClick={ToogleMode}>
          <img src={SvgMenuClose} alt="" />
        </div>

        <nav className={menu ? 'on' : ''}>
          <ul className="ul--header">
            <li>
              <a href="#Home" onClick={ToogleMode}>Home</a>
            </li>
            <li>
              <a href="#Services" onClick={ToogleMode}>Services</a>
            </li>
            <li>
              <a href="#Newsletter" onClick={ToogleMode}>Newsletter</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

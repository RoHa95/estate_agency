import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

//styles
import styles from "./Navbar.module.css";

//icons
import signup from "../assests/sign-up.png";
import logo from "../assests/logo2.png";
import signin from "../assests/sign-in.png";
import menu from "../assests/menu.svg";
import close from "../assests/close.svg";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <img src={signin} alt="sign-in" />
        <Link>ورود</Link>
        <img src={signup} alt="sign-up" />
        <Link>ثبتنام</Link>
      </div>
      <div className={styles.nav_toggler}>
        <div className={[styles.bar, styles.bar_one]}></div>
        <div className={[styles.bar, styles.bar_two]}></div>
        <div className={[styles.bar, styles.bar_three]}></div>
      </div>

      <div style={{ display: "flex" }} className="menu-container">
        <div className={styles.menuUI}>
          <ul>
            <li>
              <Link to="/">پیشنهادهای ویژه</Link>
            </li>
            <li>
              <Link to="/">آژانس های املاک</Link>
            </li>
            <li>
              <Link to="/">رهن و اجاره</Link>
            </li>
            <li>
              <Link to="/">خرید</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img className={styles.logo} src={logo} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

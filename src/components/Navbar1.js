import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//styles
import styles from "./Navbar1.module.css";
//icons
import signup from "../assests/sign-up.svg";
import logo from "../assests/logo2.png";
import signin from "../assests/sign-in.svg";
import classNames from "classnames";
const Navbar1 = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggler = () => {
    setIsToggled(!isToggled);
    console.log("clicked!");
  };
  const menu_class = `${styles.nav} ${isToggled ? styles.nav__expanded : ""}`;
  const bar_one = `${styles.bar} ${styles.bar_one}`;
  const bar_two = `${styles.bar} ${styles.bar_two}`;
  const bar_three = `${styles.bar} ${styles.bar_three}`;
  return (
    <div className={styles.whiteback}>
      <div className={menu_class}>
        <div className={styles.nav__right}>
          <div className={styles.nav__menu}>
            <div className={styles.nav__menu__container} onClick={toggler}>
              <div className={bar_one}></div>
              <div className={bar_two}></div>
              <div className={bar_three}></div>
            </div>
          </div>
          <div className={styles.nav__login}>
            <img src={signin} alt="sign-in" />
            <Link>ورود</Link>
            <img src={signup} alt="sign-up" />
            <Link>ثبتنام</Link>
          </div>
        </div>

        <div className={styles.nav__left}>
          <div className={styles.nav__list}>
            <ul>
              <li>
                <Link className={styles.nav__list__item} to="/">
                  پیشنهادهای ویژه
                </Link>
              </li>
              <li>
                <Link className={styles.nav__list__item} to="/">
                  آژانس های املاک
                </Link>
              </li>
              <li>
                <Link className={styles.nav__list__item} to="/">
                  رهن و اجاره
                </Link>
              </li>
              <li>
                <Link className={styles.nav__list__item} to="/">
                  خرید
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav__logo__container}>
            <a className={styles.nav__logo}>
              <img className={styles.nav__logo__image} src={logo}></img>
            </a>
          </div>
        </div>

        <div className={styles.nav__list2}>
          <ul>
            <li>
              <Link className={styles.nav__list__item} to="/">
                پیشنهادهای ویژه
              </Link>
            </li>
            <li>
              <Link className={styles.nav__list__item} to="/">
                آژانس های املاک
              </Link>
            </li>
            <li>
              <Link className={styles.nav__list__item} to="/">
                رهن و اجاره
              </Link>
            </li>
            <li>
              <Link className={styles.nav__list__item} to="/">
                خرید
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;

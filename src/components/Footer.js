import React from "react";
//styles
import styles from "./Footer.module.css";
//pictures
import logo from "../assests/logo2.png";
import twetter from "../assests/twitter.svg";
import instagram from "../assests/instagram.svg";
import linkdin from "../assests/linkedin.svg";
import telegram from "../assests/telegram.svg";
import youtube from "../assests/youtube.svg";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__list}>
        <div className={styles.footer__list__container}>
          <h3 className={styles.footer__list__title}>شهرهای محبوب</h3>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            رهن و اجاره آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در کیش
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در پردیس
          </span>
        </div>
        <div className={styles.footer__list__container}>
          <h3 className={styles.footer__list__title}>شهرهای محبوب</h3>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            رهن و اجاره آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در کیش
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در پردیس
          </span>
        </div>
        <div className={styles.footer__list__container}>
          <h3 className={styles.footer__list__title}>شهرهای محبوب</h3>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            رهن و اجاره آپارتمان در تهران
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در کیش
          </span>
          <span className={styles.footer__list__item}>
            خرید آپارتمان در پردیس
          </span>
        </div>
      </div>
      <div className={styles.footer__menu}>
        <a className={styles.footer__menu__logo}>
          <img src={logo}></img>
        </a>
        <ul className={styles.footer__menu__container}>
          <li>قیمت خانه شما</li>
          <li>سامانه مشاورین</li>
          <li>تماس با ما</li>
          <li>قوانین و مقررات</li>
          <li>حریم خصوصی</li>
        </ul>
      </div>
      <div className={styles.icons}>
        <div className={styles.icons__container}>
          <a className={styles.icons__item}>
            <img src={telegram}></img>
          </a>
          <a className={styles.icons__item}>
            <img src={instagram}></img>
          </a>
          <a className={styles.icons__item}>
            <img src={linkdin}></img>
          </a>
          <a className={styles.icons__item}>
            <img src={youtube}></img>
          </a>
          <a className={styles.icons__item}>
            <img src={twetter}></img>
          </a>
        </div>
        <p>کلیه حقوق این سایت متعلق به رقیه حلیمی است</p>
      </div>
    </div>
  );
};

export default Footer;

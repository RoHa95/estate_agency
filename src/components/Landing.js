import React from "react";

//styles
import styles from "./Landing.module.css";
//images
import back from "../assests/bg1.jpeg";

const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={back} />
      <div className={styles.content}>
        <h1> از ما چه می خواهید؟</h1>
        <h5>خانه دلخواه‌تان را به کمک مشاورین متخصص ما پیدا کنید</h5>
        <div className={styles.form_container}>
          <div className={styles.form__labels}>
            <span className={styles.form_container__item}>خرید</span>
            <span className={styles.form_container__item}>اجاره </span>
            <span className={styles.form_container__item}> قیمت خانه شما</span>
          </div>
          <div className={styles.form__content}>
            <p>شهر، محله و یا منطقه را وارد کنید </p>
            <div className={styles.form__button__container}>
              <input
                className={styles.form__content__input}
                placeholder="مثال: نیاوران"
              ></input>
              <button className={styles.form__content__button}>جستجو</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

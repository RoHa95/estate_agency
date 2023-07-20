import React from "react";
//styles
import styles from "./Cart.module.css";
//picture
import homepic from "../assests/q3.jpg";
import love from "../assests/twitter.svg";
const Cart = (props) => {
  const { image, title, category } = props;
  return (
    <div className={styles.cart}>
      <img className={styles.cart__image} src={image} alt="home"></img>
      <div className={styles.cart__title}>
        <div className={styles.cart__text__container}>
          <h2 className={styles.cart__title}>{title}</h2>
          <h3 className={styles.cart__category}>{category}</h3>
        </div>
        <img src={love}></img>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
//styles
import styles from "./Cart.module.css";
//picture
import homepic from "../assests/q3.jpg";

const Cart = (props) => {
  const { image, title, category } = props;
  return (
    <div className={styles.cart}>
      <img className={styles.cart__image} src={image} alt="home"></img>
      <h2 className={styles.cart__title}>{title}</h2>
      <h3 className={styles.cart__category}>{category}</h3>
    </div>
  );
};

export default Cart;

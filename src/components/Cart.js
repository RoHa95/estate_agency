import React from "react";
//styles
import styles from "./Cart.module.css";
//picture
import homepic from "../assests/q3.jpg";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <img className={styles.cart__image} src={homepic} alt="home"></img>
      <h1 className={styles.cart__title}>اپارتمان</h1>
      <h2 className={styles.cart__category}>اگهی فروش در تهران</h2>
    </div>
  );
};

export default Cart;

import React from "react";
//styles
import styles from "./Cartscrool.module.css";
//components
import SaleScoll from "./SaleScoll";
import RentScoll from "./RentScroll";

const Cartscrool = () => {
  return (
    <div className={styles.Cartscrool}>
      <h1>اگهی های جدید</h1>
      <SaleScoll></SaleScoll>
      <RentScoll></RentScoll>
    </div>
  );
};

export default Cartscrool;

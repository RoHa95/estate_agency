import React, { useRef } from "react";
//styles
import styles from "./RentScroll.module.css";
//comonents
import Cart from "./Cart";
//icons
import left from "../assests/arrow-left-solid.svg";
import right from "../assests/arrow-right-solid.svg";
//pictures
import home1 from "../assests/q1.jpg";
import home2 from "../assests/q2.jpg";
import home3 from "../assests/q3.jpg";
import home4 from "../assests/q4.jpg";
import home5 from "../assests/q1.jpg";
const RentScoll = () => {
  const scrollableRef = useRef(null);

  const handleScrollLeft = () => {
    scrollableRef.current.scrollLeft -= 100; // Scroll 100 pixels to the left
    console.log(scrollableRef);
  };

  const handleScrollRight = () => {
    scrollableRef.current.scrollLeft += 100; // Scroll 100 pixels to the right
    console.log(scrollableRef);
  };

  return (
    <div>
      <div className={styles.Cartscrool__titleContainer}>
        <div className={styles.Cartscrool__buttonContainer}>
          <div className={styles.Cartscrool__button} onClick={handleScrollLeft}>
            <img src={left}></img>
          </div>
          <div
            className={styles.Cartscrool__button}
            onClick={handleScrollRight}
          >
            <img src={right}></img>
          </div>
        </div>
        <div className={styles.Cartscrool__titleContainer__text}>
          <h3>اگهی های جدید برای رهن و اجاره در سراسر کشور</h3>
        </div>
      </div>
      <div ref={scrollableRef} className={styles.cart__container}>
        <Cart image={home3} title="ویلا" category="اگهی فروش در جوادیه"></Cart>
        <Cart
          image={home4}
          title="اپارتمان"
          category="اگهی فروش در سالاریه"
        ></Cart>
        <Cart
          image={home5}
          title="اپارتمان"
          category="اگهی فروش در همدان"
        ></Cart>
        <Cart image={home1} title="ویلا" category="اگهی فروش در تبریز"></Cart>
        <Cart
          image={home1}
          title="مغازه"
          category="اگهی فروش در زعفرانیه"
        ></Cart>
        <Cart
          image={home2}
          title="اپارتمان"
          category="اگهی فروش در پاسارگاد"
        ></Cart>
      </div>
    </div>
  );
};

export default RentScoll;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//styles
import styles from "./Signup.module.css";
//picture
import logo from "../assests/logo2.png";
import bg from "../assests/bg2.jpg";
//functions
import { validate } from "./validate";
import { notify } from "./toast";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data, touched]);

  const changeHandeler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const focusHandeler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandeler = (event) => {
    event.preventDefault();
    notify();
    if (!Object.keys(errors).length) {
      notify("ثبتنام با موفقیت انجام شد.", "seccess");
    } else {
      notify("اطلاعات صحیح را وارد کنید.", "error");
      setTouched({
        name: true,
        phoneNumber: true,
        password: true,
        confirmPassword: true,
      });
    }
  };
  return (
    <div className={styles.signup__container}>
      <div className={styles.signup__background}>
        <div className={styles.signup__background__content}>
          <h1>قبلا ثبتنام کرده اید؟</h1>
          <Link to="/signin">
            <button>ورود</button>
          </Link>
        </div>
      </div>
      <div className={styles.signup__form}>
        <p>به سایت املاک خوش امدید</p>
        <form onSubmit={submitHandeler}>
          <h2 className={styles.signup__form__title}>فرم ثبت نام</h2>
          <div className={styles.signup__form__container}>
            <div className={styles.signup__form__item}>
              <label for="name">نام و نام خانوادگی</label>
              <input
                id="name"
                placeholder="نام و نام خانوادگی"
                type="text"
                name="name"
                value={data.name}
                onChange={changeHandeler}
                onFocus={focusHandeler}
              ></input>
            </div>
            {errors.name && touched.name && <span>{errors.name}</span>}
            <div className={styles.signup__form__item}>
              <label for="phoneNumber">شماره همراه</label>
              <input
                id="phoneNumber"
                type="mobile"
                placeholder="شماره همراه"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={changeHandeler}
                onFocus={focusHandeler}
              ></input>
            </div>
            {errors.phoneNumber && touched.phoneNumber && (
              <span>{errors.phoneNumber}</span>
            )}
            <div className={styles.signup__form__item}>
              <label for="password"> گذرواژه</label>
              <input
                id="password"
                type="password"
                placeholder="گذرواژه"
                name="password"
                value={data.password}
                onChange={changeHandeler}
                onFocus={focusHandeler}
              ></input>
            </div>
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
            <div className={styles.signup__form__item}>
              <label for="confirmPassword"> تکرار گذرواژه</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="تکرار گذرواژه"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={changeHandeler}
                onFocus={focusHandeler}
              ></input>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
            <button type="submit">ثبت نام</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;

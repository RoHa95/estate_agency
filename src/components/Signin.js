import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//styles
import styles from "./Signin.module.css";
//picture
import logo from "../assests/logo2.png";
import bg from "../assests/bg2.jpg";
//functions
import { validate2 } from "./validate2";
import { notify } from "./toast";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
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
    setErrors(validate2(data));
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
      notify("ورود با موفقیت انجام شد.", "seccess");
    } else {
      notify("اطلاعات صحیح را وارد کنید.", "error");
      setTouched({
        phoneNumber: true,
        password: true,
      });
    }
  };
  return (
    <div className={styles.signup__container}>
      <div className={styles.signup__background}>
        <div className={styles.signup__background__content}>
          <Link to="/signup">
            <button>ثبتنام</button>
          </Link>
          <h1>هنوز ثبتنام نکرده اید؟</h1>
        </div>
      </div>
      <div className={styles.signup__form}>
        <p>به سایت املاک خوش امدید</p>
        <form onSubmit={submitHandeler}>
          <h2 className={styles.signup__form__title}>فرم ورود </h2>
          <div className={styles.signup__form__container}>
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

            <button type="submit"> ورود </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signin;

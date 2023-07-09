import React from "react";

//styles
import styles from "./Landing.module.css";
//images
import back from "../assests/bg1.jpeg";

const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={back} />
      <h1> از ما چه می خواهید؟</h1>
    </div>
  );
};

export default Landing;

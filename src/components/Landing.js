import React from "react";
//components
import Navbar1 from "./Navbar1";
import Hero from "./Hero";
import Cartscrool from "./Cartscrool";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar1></Navbar1>
      <Hero></Hero>
      <Cartscrool></Cartscrool>
      <Footer></Footer>
    </div>
  );
};

export default Landing;

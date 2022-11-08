import React from "react";
import logo from "../assets/images/logo.jpg";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className='home-container height-100'>
      <section className='logo-section center-flex'>
        <div className='img-container'>
          <img src={logo} alt='logo.jpg' />
        </div>
        <div className='login-btn'>DEFAULT</div>
      </section>
      <section className='body-section'></section>
    </div>
  );
};

export default Home;

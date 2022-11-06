import React from "react";
import logo from "../assets/images/logo.jpg";
const Home = () => {
  return (
    <div className='home-container height-100'>
      <section className='logo-section center-flex'>
        <div className='img-container'>
          <img src={logo} alt='logo.jpg' />
        </div>
        <div className='login-btn'>login/register</div>
      </section>
      <section className='body-section'></section>
    </div>
  );
};

export default Home;

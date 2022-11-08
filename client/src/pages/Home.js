import React from "react";
import logo from "../assets/images/logo.jpg";
import { useState, useContext } from "react";
import { LanguageContext, Text } from "../language";
import LanguageSelector from "../components/LanguageSelector";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const { dictionarty } = useContext(LanguageContext);

  return (
    <div className='home-container height-100'>
      <section className='logo-section center-flex'>
        <div className='img-container'>
          <img src={logo} alt='logo.jpg' />
        </div>
        <div className='login-lang-container center-flex'>
          <div className='login-btn'>
            <Text text_id='login-btn'></Text>
          </div>
          <LanguageSelector></LanguageSelector>
        </div>
      </section>
      <section className='body-section'></section>
    </div>
  );
};

export default Home;

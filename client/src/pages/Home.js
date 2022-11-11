import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Text } from "../contex/language";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { CookieContex } from "../contex/cookies";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("joksa");
  const [authToken, setAuthToken] = useState(false);
  const { cookies, removeCookie } = useContext(CookieContex);
  // onCLick
  const handleClick = () => {
    if (!authToken) {
      navigate("/auth");
    } else {
      setAuthToken(false);
      removeCookie("token");
    }
  };
  // useEffect
  useEffect(() => {
    if (cookies.token) {
      setAuthToken(!authToken);
      setUserName(location?.state.username);
    }
  }, [cookies]);

  return (
    <div className='home-container height-90'>
      {authToken && (
        <h3 id='user-name'>
          <span>
            <Text text_id='user-name-span'>DEFAULT</Text>
          </span>
          {userName}
        </h3>
      )}
      <section className='logo-section center-flex'>
        <div className='img-container'>
          <h2>LOGO POP STAR STUDIO</h2>
        </div>
        <div className='video-login-container center-flex'>
          <div className='video-container'>
            <h1>video</h1>
          </div>
          <div className='logo-section-right center-flex'>
            <LanguageSelector></LanguageSelector>
            <div className='login-btn' onClick={handleClick}>
              {authToken ? (
                <Text text_id='logout-btn'>DEFAULT</Text>
              ) : (
                <Text text_id='login-btn'>DEFAULT</Text>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='body-section'></section>
    </div>
  );
};

export default Home;

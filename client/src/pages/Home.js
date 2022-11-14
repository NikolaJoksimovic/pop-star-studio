import React, { useContext, useEffect, useState } from "react";
import { Text } from "../contex/language";
import { Link, useNavigate } from "react-router-dom";
import { CookieContex } from "../contex/cookies";
import LanguageSelector from "../components/LanguageSelector";
import DropSection from "../components/DropSection";
import { useCookies } from "react-cookie";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("joksa");
  const [authToken, setAuthToken] = useState(false);
  const { reload, removeCookie } = useContext(CookieContex);
  const [newCookies] = useCookies(["user"]);

  // onCLick
  const handleClick = () => {
    if (!authToken) {
      navigate("/auth");
    } else {
      setAuthToken(false);
      removeCookie("token");
      removeCookie("username");
    }
  };
  // useEffect
  useEffect(() => {
    if (!window.localStorage.getItem("lang-opt")) {
      window.localStorage.setItem("lang-opt", "en");
    }
  }, []);
  useEffect(() => {
    if (newCookies.token) {
      setUserName(newCookies.username);
      setAuthToken(true);
    }
  }, [reload]);
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
            <iframe
              className='iframe-video'
              width='560'
              height='315'
              src='https://www.youtube-nocookie.com/embed/als7xoyNyoE?controls=0.setVolume(0)'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
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
      <section className='body-section'>
        <DropSection name={"drop-section-1"}>
          <Link>
            <h3>
              <Text text_id='drop-section-1-link-1'>DEFAULT</Text>
            </h3>
          </Link>
          <Link>
            <h3>
              <Text text_id='drop-section-1-link-2'>DEFAULT</Text>
            </h3>
          </Link>
        </DropSection>
        <DropSection name={"drop-section-2"}>
          <Link>
            <h3>
              <Text text_id='drop-section-2-link-1'>DEFAULT</Text>
            </h3>
          </Link>
          <Link>
            <h3>
              <Text text_id='drop-section-2-link-2'>DEFAULT</Text>
            </h3>
          </Link>
          <Link>
            <h3>
              <Text text_id='drop-section-2-link-3'>DEFAULT</Text>
            </h3>
          </Link>
        </DropSection>
        <DropSection name={"dorp-section-3"}></DropSection>
        <DropSection name={"dorp-section-4"}></DropSection>
      </section>
    </div>
  );
};

export default Home;

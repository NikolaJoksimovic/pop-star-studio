import React, { useContext, useEffect, useState } from "react";
import { Text } from "../contex/language";
import { Link, useNavigate } from "react-router-dom";
import { CookieContex } from "../contex/cookies";
import LanguageSelector from "../components/LanguageSelector";
import DropSection from "../components/DropSection";
import { useCookies } from "react-cookie";
import Footer from "../components/Footer";
import { ImInstagram, ImYoutube2 } from "react-icons/im";
import { GrFacebook, GrLinkedin } from "react-icons/gr";

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
    <>
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
            <div className='socials center-flex'>
              <a
                id='instagram'
                href='https://instagram.com/pangolier322?igshid=YmMyMTA2M2Y='
                target='_blank'
              >
                <ImInstagram></ImInstagram>
              </a>
              <a
                id='youtube'
                href='https://www.youtube.com/user/LUKA17000'
                target='_blank'
              >
                <ImYoutube2></ImYoutube2>
              </a>
              <a id='facebook' href='' target='_blank'>
                <GrFacebook></GrFacebook>
              </a>
            </div>
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
            <Link className='drop-link' to='/projects'>
              <h3>
                <Text text_id='drop-section-1-link-1'>DEFAULT</Text>
              </h3>
            </Link>
            <Link className='drop-link'>
              <h3>
                <Text text_id='drop-section-1-link-2'>DEFAULT</Text>
              </h3>
            </Link>
          </DropSection>
          <DropSection name={"drop-section-2"}>
            <Link className='drop-link'>
              <h3>
                <Text text_id='drop-section-2-link-1'>DEFAULT</Text>
              </h3>
            </Link>
            <Link className='drop-link'>
              <h3>
                <Text text_id='drop-section-2-link-2'>DEFAULT</Text>
              </h3>
            </Link>
            <Link className='drop-link'>
              <h3>
                <Text text_id='drop-section-2-link-3'>DEFAULT</Text>
              </h3>
            </Link>
          </DropSection>
          <DropSection name={"working on it"}></DropSection>
          <DropSection name={"working on it"}></DropSection>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;

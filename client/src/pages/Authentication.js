import { Text } from "../contex/language";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CookieContex } from "../contex/cookies";
import axios from "axios";
import Footer from "../components/Footer";

const Authenication = () => {
  // variables
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const { reload, setReload, setCookie } = useContext(CookieContex);
  // URL
  let url = "https://secret-chamber-76247.herokuapp.com";
  // url = "http://localhost:8000";
  // functions
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/auth/createlogin`, input);
      if (response) {
        setCookie("token", response.data.token);
        setCookie("username", response.data.username);
        navigate("/");
        setReload(!reload);
      }
    } catch (error) {
      // Ovo moram jos da sredim kada ima vise od jednog errora...
      let err = JSON.stringify(error.response.data.msg);
      err = err.substring(1, err.length - 1);
      setErrMsg(err);
    }
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };
  return (
    <section id='auth-section' className=' center-flex height-90'>
      <div className='text-container'>
        <h1>
          <Text text_id='auth-h1'>DEFAULT</Text>
        </h1>
      </div>
      <div className='form-container'>
        <form action='' className='center-flex'>
          <label htmlFor='username-input'>username</label>
          <input
            name='username'
            id='username-input'
            type='text'
            value={input.username}
            onChange={handleChange}
          />
          <label htmlFor='password-input'>password</label>
          <input
            name='password'
            id='password-input'
            type='password'
            value={input.password}
            onChange={handleChange}
          />
          <div className='auth-error-container'>
            <h4>
              <Text text_id={errMsg}>DEFAULT</Text>
              {/* <Text text_id='auth-error2'>DEFAULT</Text> */}
            </h4>
          </div>
          <button type='submit' className='primary-btn' onClick={handleClick}>
            <Text text_id='auth-btn'>DEFAULT</Text>
          </button>
        </form>
      </div>
      <div className='img-container'>
        <h2>LOGO POP STAR STUDIO</h2>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Authenication;

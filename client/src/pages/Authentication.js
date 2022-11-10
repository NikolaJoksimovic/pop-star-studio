import { Text } from "../language";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Authenication = () => {
  // variables
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  // functions
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };
  // useEffect

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
          <button type='submit' className='primary-btn' onClick={handleClick}>
            <Text text_id='auth-btn'>DEFAULT</Text>
          </button>
        </form>
      </div>
      <div className='img-container'>
        <h2>LOGO POP STAR STUDIO</h2>
      </div>
    </section>
  );
};

export default Authenication;

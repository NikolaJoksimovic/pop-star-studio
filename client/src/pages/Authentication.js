import { Text } from "../language";

const Authenication = () => {
  return (
    <section id='auth-section' className=' center-flex height-90'>
      <div className='text-container'>
        <h1>
          <Text text_id='auth-h1'>DEFAULT</Text>
        </h1>
      </div>
      <div className='form-container'>
        <form action='' className='center-flex'>
          <label htmlFor=''>username</label>
          <input type='text' />
          <label htmlFor=''>password</label>
          <input type='password' />
        </form>
      </div>
      <button>DEFAULT</button>
      <div className='img-container'>
        <h2>LOGO POP STAR STUDIO</h2>
      </div>
    </section>
  );
};

export default Authenication;

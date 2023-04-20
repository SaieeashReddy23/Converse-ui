import { FaRegEnvelope } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'

import styled from 'styled-components'

import googleLogo from '../../assets/images/google-icon.svg'
import facebookLogo from '../../assets/images/facebook.svg'

const LoginForm = () => {
  return (
    <Wrapper>
      <h4 className="header">Welcomeback!</h4>
      <p className="sub-header">
        Start managing your finance faster and better{' '}
      </p>

      <form className="login-form">
        <div className="input-container">
          <span>
            <FaRegEnvelope />
          </span>
          <input type="email" className="input" placeholder="you@example.com" />
        </div>

        <div className="input-container">
          <span>
            <MdOutlineLock />
          </span>
          <input
            type="password"
            className="input"
            placeholder="At least 8 characters"
          />
          <span className="password">
            <AiOutlineEye />
          </span>
        </div>

        <p className="forgot-password">Forgot password?</p>

        <button className=" btn login-btn">Login</button>
      </form>

      <div className="seperator">or</div>

      <div className="btns-container">
        <button className="google-btn">
          <img src={googleLogo} alt="google" /> Google
        </button>
        <button className="facebook-btn">
          <img src={facebookLogo} alt="facebook" />
          Facebook
        </button>
      </div>

      <p className="sign-up">
        Don't you have an account? <span>Sign Up</span>
      </p>
    </Wrapper>
  )
}
export default LoginForm

const Wrapper = styled.div`
  width: 70%;
  margin: 15rem auto;
  max-width: 450px;

  .header {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .sub-header {
    color: var(--grey-400);
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
  }

  .input-container {
    display: flex;
    align-items: center;
    background-color: var(--grey-50);
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  .input-container span {
    background-color: var(--white);
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    color: var(--primary-400);
  }

  .input-container input {
    padding: 0.5rem 1rem;
    width: 100%;
    background: transparent;
    border: transparent;
    color: var(--grey-500);
  }

  input::placeholder {
    letter-spacing: 0.1rem;
    color: var(--grey-300);
  }

  .forgot-password {
    color: var(--primary-400);
    text-align: right;
    margin-bottom: 1rem;
  }

  .input-container .password {
    color: var(--grey-700);
    background: transparent;
  }

  .login-btn {
    width: 100%;
    border-radius: 8px;
    padding: 1rem 0.5rem;
  }

  .seperator {
    margin: 2rem 0;

    display: flex;

    align-items: center;
    text-align: center;
    /* 
  border: 1px solid red; */
  }

  .seperator::after,
  .seperator::before {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--grey-50);
  }

  .seperator::before {
    margin-right: 0.5rem;
  }

  .seperator::after {
    margin-left: 0.5rem;
  }

  .btns-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .google-btn,
  .facebook-btn {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid var(--grey-100);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 7px;
    cursor: pointer;
  }

  .btns-container img {
    width: 20px;
  }

  .sign-up {
    text-align: center;
    margin-top: 2rem;
    color: var(--grey-400);
    cursor: pointer;
  }

  .sign-up span {
    color: var(--primary-500);
  }
`

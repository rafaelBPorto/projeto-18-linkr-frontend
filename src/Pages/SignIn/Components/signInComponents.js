import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../Contexts/userContext";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>linkr</h1>

        <h2>
          save, share and discover <br></br>
          the best links on the web
        </h2>
      </div>
    </BannerContainer>
  );
}

export function LoginForm() {
  const [userToken, setUserToken] = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  async function submitLogin(e) {
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await axios.post(`//localhost:4000`, login);
      setUserToken(response.data);
      localStorage.setItem("token", response.data);
      navigate("/timeline");
    } catch (err) {
      setDisabled(false);
      alert(err.response.data);
    }
  }

  return (
    <Form onSubmit={submitLogin}>
      <input
        name="email"
        value={login.email}
        type="email"
        required
        onChange={handleLogin}
        placeholder="e-mail"
      ></input>
      <input
        name="password"
        value={login.password}
        type="password"
        required
        onChange={handleLogin}
        placeholder="password"
      ></input>
      <button disabled={disabled} type="submit">
        Log In
      </button>

      <Link to="/sign-up">
        <p>First time? Create an account! </p>
      </Link>
    </Form>
  );
}

export const Form = styled.form`
  font-family: "Oswald";
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  input {
    font-family: "Oswald";
    font-size: 20px;
    font-weight: 400;
    width: 80%;
    border-radius: 6px;
    outline: none;
    height: 65px;
    margin: 6px;
    background: white;
    ::placeholder {
      font-family: "Oswald";
      color: #9f9f9f;
      font-size: 27px;
    }
  }
  button {
    font-family: "Oswald";
    width: 80%;
    height: 65px;
    background-color: #1877f2;
    color: white;
    border-radius: 6px;
    font-size: 27px;
    margin: 6px;
    border: none;
  }
  p {
    font-family: "Lato";
    text-decoration: underline;
    width: 100%;
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin: 6px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 811px) {
    width: 100%;
    height: 70%;
    input {
      height: 55px;
    }
  }
`;

const BannerContainer = styled.div`
  width: 75%;
  height: 100vh;
  background-color: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 100px;
    align-self: center;
  }
  h2 {
    font-family: "Oswald";
    font-size: 43px;
    font-weight: 700;
  }
  @media (max-width: 811px) {
    width: 100%;
    height: 30%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    } h1 {
      font-size: 76px;
    } h2 {
      font-size: 23px;
    }
    
  }
`;

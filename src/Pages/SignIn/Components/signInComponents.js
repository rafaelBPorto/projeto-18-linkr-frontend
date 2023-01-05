import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

export function Banner() {
  return (
    <BannerContainer>
      <h1>linkr</h1>

      <h2>
        save, share and discover <br></br>
        the best links on the web
      </h2>
    </BannerContainer>
  );
}

export function LoginForm() {
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

  function submitLogin(e) {
    alert(`${login.email}, ${login.password}`);
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
      <button type="submit">Log In</button>

      <Link to="/sign-up">
        <p>First time? Create an account! </p>
      </Link>
    </Form>
  );
}

const Form = styled.form`
  font-family: "Oswald";
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  input {
    width: 80%;
    border-radius: 6px;
    outline: none;
    height: 65px;
    margin: 6px;
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
  }
  p {
    font-family: "Oswald";
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
  }
  h2 {
    font-family: "Oswald";
    font-size: 43px;
    font-weight: 700;
  }
`;
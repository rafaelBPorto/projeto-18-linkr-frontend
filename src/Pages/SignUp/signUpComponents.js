import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../SignIn/Components/signInComponents";

export function SignUpForm() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    username: "",
    pictureUrl: "",
  });

  function handleSignUp(e) {
    e.preventDefault();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  }

  async function submitSignUp(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`//localhost:4000/sign-up`, signUp);
      navigate("/");
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
    <Form onSubmit={submitSignUp}>
      <input
        name="email"
        value={signUp.email}
        type="email"
        required
        onChange={handleSignUp}
        placeholder="e-mail"
      ></input>
      <input
        name="password"
        value={signUp.password}
        type="password"
        required
        onChange={handleSignUp}
        placeholder="password"
      ></input>
      <input
        name="username"
        value={signUp.username}
        type="text"
        required
        onChange={handleSignUp}
        placeholder="username"
      ></input>
      <input
        name="pictureUrl"
        value={signUp.pictureUrl}
        type="url"
        required
        onChange={handleSignUp}
        placeholder="picture url"
      ></input>
      <button type="submit">Sign Up</button>

      <Link to="/">
        <p>Switch back to log in </p>
      </Link>
    </Form>
  );
}

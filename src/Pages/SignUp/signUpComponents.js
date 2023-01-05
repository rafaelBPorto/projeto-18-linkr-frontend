import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../SignIn/Components/signInComponents";


export function SignUpForm() {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: "",
    photo: ""
  });

  function handleSignUp(e) {
    e.preventDefault();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  }

  function submitSignUp(e) {
    e.preventDefault();
    console.log(signUp);
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
        name="name"
        value={signUp.name}
        type="text"
        required
        onChange={handleSignUp}
        placeholder="username"
      ></input>
      <input
        name="photo"
        value={signUp.photo}
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

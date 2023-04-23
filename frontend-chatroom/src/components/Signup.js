
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data"
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted!");
    data.signup(name, password, email)
      .then((success) => {
        if (success === 1) {
          console.log("signup success")
          navigate("/");
        } else {
          console.log(success);
          setErrorMessage("Invalid signup credentials");
        }
      })
      .catch((error) => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Signup</button>
    </form>
  );
}
export default Signup;
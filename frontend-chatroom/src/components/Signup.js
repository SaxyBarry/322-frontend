
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from "../data/userdata"
const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted!");
    userdata.signup(name, password, phone)
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
    const formatPhoneNumber = (phoneNumber) => {
      const formattedPhoneNumber = phoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1) $2-$3"
      );
      return formattedPhoneNumber;
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
      <label htmlFor="phone">phone:</label>
      <input
        type="number"
        id="phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
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
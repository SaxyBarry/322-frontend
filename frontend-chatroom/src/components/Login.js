import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from "../data/userdata";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );
   const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    userdata.login(username, password)
      .then((success) => {
        if (success === true) {
            localStorage.setItem("authenticated", "true");
            localStorage.setItem("user", username)
            localStorage.setItem("admin", true)
            setauthenticated("true");
            navigate("/chatroom");
        }else if (success === false) {
          localStorage.setItem("authenticated", "true");
          localStorage.setItem("user", username);
          localStorage.setItem("admin", false);
          setauthenticated("true");
          navigate("/chatroom");
        } else {
          console.log(success);
          setErrorMessage("Invalid login credentials");
        }
      })
      .catch((error) => {
        
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        {errorMessage && <div>{errorMessage}</div>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

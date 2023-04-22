import { useEffect, useState } from "react";
import MessageBoard from "../components/MessageBoard";
import TextInput from "../components/TextInput";
import { Navigate } from "react-router-dom";

const Chatroom = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser === "true");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate replace to="/Login" />;
  } else {
    return (
      <div>
        <h1>Chatroom</h1>
        <MessageBoard />
        <TextInput />
      </div>
    );
  }
};

export default Chatroom;

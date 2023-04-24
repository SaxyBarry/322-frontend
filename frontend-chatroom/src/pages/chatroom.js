import { useEffect, useState } from "react";
import MessageBoard from "../components/MessageBoard";
import TextInput from "../components/TextInput";
import { Navigate } from "react-router-dom";

const Chatroom = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser === "true");
      setUser(localStorage.getItem("user"));
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
        {<div>Welcome {user}</div>}
        <MessageBoard user={user} />
        <TextInput user={user} />
      </div>
    );
  }
};

export default Chatroom;

import { useState } from "react";
import messagedata from "../data/messagedata";
import "../styles/TextInput.css";
function TextInput(props) {
    const[chatbox, setchatbox] = useState(null)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(chatbox)
      messagedata.sendMessage(chatbox, props.user)
      props.setpingAPI(true);
    };
  return (
    <div className="TextInput">
      <form onSubmit={handleSubmit}>
        <input
        className="textarea"
          type="text"
          name="chatbox"
          value={chatbox}
          onChange={(e) => setchatbox(e.target.value)}
        />
        <input className="submitBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default TextInput;

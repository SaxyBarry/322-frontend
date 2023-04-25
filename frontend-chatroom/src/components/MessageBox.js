import { useState, useRef } from "react";
import "../styles/MessageBox.css";
import admindata from "../data/admindata";

function MessageBox(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOption1 = () => {
    admindata.deleteMessages(props.id, props.user, props.messagetext)
    setShowDropdown(false);
    props.setpingAPI(true)
  };

  const handleOption2 = () => {
    admindata.deleteUser(props.user)
    setShowDropdown(false);
    props.setpingAPI(true);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  const showDeleteButton = localStorage.getItem("admin") === "true";

  return (
    <div className="MessageBox">
      <div className="message-header">
        <h1>{props.user}</h1>
        {showDeleteButton && (
          <div className="dropdown-container" ref={dropdownRef}>
            <button className="delete-button" onClick={handleClick}>
              &#x2716;
            </button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={handleOption1}>Delete Message</button>
                <button onClick={handleOption2}>Delete User</button>
              </div>
            )}
          </div>
        )}
      </div>
      <h3>12:31 4/20/2023</h3>
      <p>{props.messagetext}</p>
    </div>
  );
}

export default MessageBox;

import "../styles/MessageBoxLoggedIn.css";
function MessageBox(props) {
  return (
    <div className="MessageBox">
      <h1>{props.user}</h1>
      <h3>12:33 4/20/2023</h3>
      <p>{props.messagetext}</p>
    </div>
  );
}

export default MessageBox;

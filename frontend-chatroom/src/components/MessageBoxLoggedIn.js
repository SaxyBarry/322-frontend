import "../styles/MessageBox.css";
function MessageBoxLoggedIn(props) {
  return (
    <div className="MessageBoxLoggedIn">
      <h1>{props.user}</h1>
      <h3>12:31 4/20/2023</h3>
      <p>{props.messagetext}</p>
    </div>
  );
}

export default MessageBoxLoggedIn;

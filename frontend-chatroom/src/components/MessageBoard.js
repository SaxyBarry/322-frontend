import "../styles/MessageBoard.css";
import MessageBox from "./MessageBox";
import MessageBoxLoggedIn from "./MessageBoxLoggedIn";
function MessageBoard(props) {
  return (
    <div className="MessageBoard">
      <MessageBox />
      <MessageBoxLoggedIn user={props.user} />
      <MessageBox />
      <MessageBox />
      <MessageBoxLoggedIn user={props.user} />
      <MessageBoxLoggedIn user={props.user} />
    </div>
  );
}

export default MessageBoard;

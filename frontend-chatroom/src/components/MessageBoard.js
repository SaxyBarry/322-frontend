import "../styles/MessageBoard.css";
import MessageBox from "./MessageBox";
import MessageBoxLoggedIn from "./MessageBoxLoggedIn";
function MessageBoard() {
  return (
      <div className="MessageBoard">
        <MessageBox />
        <MessageBoxLoggedIn />
        <MessageBox />
        <MessageBox />
        <MessageBoxLoggedIn />
        <MessageBoxLoggedIn />
      </div>
  );
}

export default MessageBoard;

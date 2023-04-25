import "../styles/MessageBoard.css";
import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import MessageBoxLoggedIn from "./MessageBoxLoggedIn";
import messagedata from "../data/messagedata"
function MessageBoard(props) {
  const [loading, setLoading] = useState(true);
  const [userMessages, setUserMessages] = useState([]);
  useEffect(() => {
    const messages = messagedata.getMessages();
    messages.then((result) => {
      setUserMessages(result);
    });
    setLoading(false);
    props.setpingAPI(false);
  }, [props, props.pingApi]);
  if(loading){
    return(<div>Loading</div>)
  }else{
    
    const userMessageComponents = userMessages.map((message) =>
      message.username === props.user ? (
        <MessageBoxLoggedIn
          key={message.id}
          id={message.id}
          pingApi={props.pingApi}
          setpingAPI={props.setpingAPI}
          user={message.username}
          messagetext={message.messageContent}
        />
      ) : (
        <MessageBox
          key={message.id}
          id={message.id}
          pingApi={props.pingApi}
          setpingAPI={props.setpingAPI}
          user={message.username}
          messagetext={message.messageContent}
        />
      )
    );

    return (
      <div className="MessageBoard">
        {userMessageComponents}
      </div>
    );
  }
}

export default MessageBoard;

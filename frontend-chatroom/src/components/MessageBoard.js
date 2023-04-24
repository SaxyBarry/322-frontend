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
    messages.then((result)=>{
        // const m1 = []
        // const m2 = []
        // setotherMessages([])
        // for(const x in result){
        //     if(result[x].username === props.user){
        //         m1.push(result[x])
        //     }else{
        //         m2.push(result[x])
        //     }
        // }
        // setUserMessages(m1);
        // setotherMessages(m2);
        setUserMessages(result)
    })
    setLoading(false);
  }, []);
  if(loading){
    return(<div>Loading</div>)
  }else{
    
    const userMessageComponents = userMessages.map((message) =>
      message.username === props.user ? (
        <MessageBoxLoggedIn
          key={message.id}
          user={message.username}
          messagetext={message.messageContent}
        />
      ) : (
        <MessageBox
          key={message.id}
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

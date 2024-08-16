import { useContext, useEffect } from "react";
import Message from "./Message";
import classes from "./style.module.css";
import socket from "../../socket";
import { ChatContext } from "../../context/chatStore";

const ChatContent: React.FunctionComponent = () => {
  const { messages, setMessages } = useContext(ChatContext);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => {
        return [...prev, data];
      });
    });
  }, []);

  return (
    <div className={classes.chat_content}>
      {messages.map((m) => {
        if (m.from === "you") {
          return (
            <Message
              type={"outcoming"}
              content={m.message}
              key={Math.random()}
            />
          );
        } else {
          return (
            <Message
              type={"incoming"}
              content={m.message}
              key={Math.random()}
            />
          );
        }
      })}
    </div>
  );
};

export default ChatContent;

import { useContext, useRef } from "react";

import classes from "./style.module.css";
import socket from "../../socket";
import { ChatContext } from "../../context/chat";

const ChatInput = () => {
  const { setMessages, room } = useContext(ChatContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitMessage = () => {
    const message = inputRef?.current?.value;
    socket.emit("send_message", { message, from: "other", room });

    setMessages((prev) => {
      return [...prev, { from: "you", message, room }];
    });
  };

  return (
    <div className={classes.chat_input_container}>
      <input ref={inputRef} className={classes.chat_input} />
      <button onClick={submitMessage} className={classes.chat_input_btn}>
        Send Message
      </button>
    </div>
  );
};
export default ChatInput;

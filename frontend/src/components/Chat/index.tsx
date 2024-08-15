import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import classes from "./style.module.css";

const Chat = () => {
  return (
    <div className={classes.chat_container}>
      <ChatContent />
      <ChatInput />
    </div>
  );
};
export default Chat;

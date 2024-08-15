import Message from "./Message";
import classes from "./style.module.css";

const ChatContent: React.FunctionComponent = () => {
  return (
    <div className={classes.chat_content}>
      <Message type={"incoming"} />
      <Message type={"outcoming"} />
    </div>
  );
};

export default ChatContent;

import classes from "./style.module.css";
type MessageProps = {
  type: string;
  content: string;
};
const Message: React.FunctionComponent<MessageProps> = ({ type, content }) => {
  return (
    <div
      className={
        type === "incoming"
          ? classes.message_incoming
          : classes.message_outcoming
      }
    >
      <div className={classes.message}>{content}</div>
    </div>
  );
};

export default Message;

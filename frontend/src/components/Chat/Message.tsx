import classes from "./style.module.css";
type MessageProps = {
  type: string;
};
const Message: React.FunctionComponent<MessageProps> = ({ type }) => {
  return (
    <div
      className={
        type === "incoming"
          ? classes.message_incoming
          : classes.message_outcoming
      }
    >
      <div className={classes.message}>hello</div>
    </div>
  );
};

export default Message;

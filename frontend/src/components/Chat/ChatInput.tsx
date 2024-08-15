import classes from "./style.module.css";

const ChatInput = () => {
  return (
    <div className={classes.chat_input_container}>
      <input className={classes.chat_input} />
      <button className={classes.chat_input_btn}>Send Message</button>
    </div>
  );
};
export default ChatInput;

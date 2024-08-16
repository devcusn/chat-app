import { FormEvent, useContext } from "react";
import classes from "./style.module.css";
import { useNavigate } from "react-router-dom";
import socket from "../../socket";
import { ChatContext } from "../../context/chat";

interface FormElement extends EventTarget {
  room_number: {
    value: number;
  };
  username: {
    value: string;
  };
}
const SignInPage = () => {
  const { setRoom } = useContext(ChatContext);
  const navigate = useNavigate();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.target as FormElement;
    const roomNumber = formElements.room_number.value;
    setRoom(roomNumber);
    socket.emit("join_room", roomNumber);
    navigate("/chat");
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h2>Welcome Back</h2>
        <form onSubmit={submit}>
          <input
            name="username"
            className={classes.input}
            placeholder="username"
          />
          <input
            name="room_number"
            className={classes.input}
            placeholder="room number"
            type="number"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;

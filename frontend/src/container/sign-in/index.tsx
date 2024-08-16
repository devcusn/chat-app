import { FormEvent } from "react";
import classes from "./style.module.css";
import { useNavigate } from "react-router-dom";
import socket from "../../socket";

interface FormElement extends EventTarget {
  room_number: {
    value: number;
  };
  username: {
    value: string;
  };
}
const SignInPage = () => {
  const navigate = useNavigate();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.target as FormElement;
    socket.emit("join_room", formElements.room_number.value);
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

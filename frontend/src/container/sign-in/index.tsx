import { FormEvent } from "react";
import classes from "./style.module.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/chat");
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h2>Welcome Back</h2>
        <form onSubmit={submit}>
          <input className={classes.input} placeholder="username" />
          <input className={classes.input} placeholder="room numer" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;

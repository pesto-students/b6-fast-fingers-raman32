import React, {  } from "react";
import useLogin from "../../hooks/useLogin";
import ButtonWithSpinner from "../ButtonWithSpinner";
import Input from "../Input";
import SnackBar from "../SnackBar";
import "./index.css";
function LoginCard() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    login,
    loggingIn,
    error,
  } = useLogin();

  return (
    <div className="LoginCard">
      <div className="inputContainer">
        ""
        <Input
          type="email"
          text={email}
          setText={setEmail}
          placeholder="Enter your Email"
          required={true}
          emptyErrorMessage="Email is required"
        />
        <Input
          type="password"
          text={password}
          setText={setPassword}
          placeholder="Enter your Password"
          required={true}
          emptyErrorMessage="Password is required"
        />
      </div>

      <ButtonWithSpinner onClick={() => login()} showSpinner={loggingIn}>
        {" "}
        Login{" "}
      </ButtonWithSpinner>
      <SnackBar message={error} show={!!error} />
    </div>
  );
}
export default LoginCard;

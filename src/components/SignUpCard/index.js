import React from "react";
import useSignUp from "../../hooks/useSignUp";
import ButtonWithSpinner from "../ButtonWithSpinner";
import Input from "../Input";
import SnackBar from "../SnackBar";
import "./index.css";
function SignUpCard() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    loggingIn,
    error,
  } = useSignUp();
  return (
    <div className="SignUpCard">
      <div className="inputContainer">
        <Input
          type="text"
          text={name}
          setText={setName}
          placeholder="Enter your Name"
          required={true}
          emptyErrorMessage="Name is required"
        />
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
      <ButtonWithSpinner onClick={() => signUp()} showSpinner={loggingIn}>
        {" "}
        Register{" "}
      </ButtonWithSpinner>
      <SnackBar message={error} show={!!error} />
    </div>
  );
}
export default SignUpCard;

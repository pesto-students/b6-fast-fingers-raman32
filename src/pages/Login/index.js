import React, { useContext } from "react";
import "./index.css";

import { useHistory } from "react-router-dom";

import LoginCard from "../../components/LoginCard";
import SignUpCard from "../../components/SignUpCard";
import Tab from "../../components/Tab";
import Logo from "../../components/Logo";

import { UserContext } from "../../App";
import { routes } from "../../utils/constants";

function Login() {
  const { user } = useContext(UserContext);
  let history = useHistory();
  if (user.loggedIn) {
    history.push(routes.entry);
  }
  return (
    <div className="Login">
      <Logo />
      <Tab
        components={[
          { heading: "SignUp", body: <SignUpCard /> },
          { heading: "SignIn", body: <LoginCard /> },
        ]}
      />
    </div>
  );
}
export default Login;

import { useState, useCallback, useContext } from "react";
import { UserContext } from "../App";
import { USER_LOGIN_API_ENDPOINT } from "../utils/constants";
function useLogin() {
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState("");
    const [error,setError] = useState(null);
    const login = useCallback(()=>{
      setLoggingIn(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({email,password}),
          redirect: "follow",
        };
        fetch(USER_LOGIN_API_ENDPOINT, requestOptions)
          .then((response) => response.json())
          .then((data)=>{
            if (!!data && data["auth-token"]) {
                setUser({
                  loggedIn: true,
                  "auth-token": data["auth-token"],
                  name: data["name"],
                });
            }
            else if(data["status"]==="error") {
              setError(data["message"]);
            }
          })
          .catch((error)=>{
            setError(error.message)
          })
          .finally(()=>setLoggingIn(false))
      }, [email, password, setUser]);
    return {
        email,
        setEmail,
        password,
        setPassword,
        login,
        loggingIn,
        error
    }
}
export default useLogin;
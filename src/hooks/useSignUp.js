import { useState, useCallback, useContext } from "react";
import { UserContext } from "../App";
import { USER_REGISTER_API_ENDPOINT } from "../utils/constants";
function useSignUp() {
    const {setUser} = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);
    const [error,setError] = useState(null);
    const signUp = useCallback(()=>{
      setLoggingIn(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({name,email,password}),
          redirect: "follow",
        };
        fetch(USER_REGISTER_API_ENDPOINT, requestOptions)
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
      }, [name, email, password, setUser]);
    return {
        name, 
        setName, 
        email,
        setEmail,
        password,
        setPassword,
        signUp,
        loggingIn,
        error
    }
}
export default useSignUp;
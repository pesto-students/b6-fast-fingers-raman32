import { useState, useEffect, useContext, useCallback } from "react";
import { UserContext } from "../App";

export default function useFetchPost(url, body, addAuthToken = false) {
  const { user } = useContext(UserContext);
  const [fetching, setfetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchPost = useCallback(() => {
    if (!url || !body) return;
    if (addAuthToken && !user["auth-token"]) return;
    setfetching(true);
    setData(null);
    setError(null);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (addAuthToken && !!user && user["auth-token"])
      myHeaders.append("auth-token", user["auth-token"]);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setfetching(false));
  }, [url, body, addAuthToken, user]);
  useEffect(()=>fetchPost(),[fetchPost])
  return {
    fetching,
    data,
    error,
    refetch: fetchPost
  };
}

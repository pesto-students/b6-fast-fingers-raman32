import { useState, useCallback, useEffect } from "react";

export default function useFetch(url) {
  const [fetching, setfetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData =  useCallback(() => {
    if (!url) return;
    setfetching(true);
    setData(null);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setfetching(false));
  }, [url]);
  useEffect(()=>fetchData(),[fetchData]);
  return {
    fetching,
    data,
    error,
    refetch: fetchData
  };
}

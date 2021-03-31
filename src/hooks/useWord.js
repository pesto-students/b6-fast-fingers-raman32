import { useEffect, useState } from "react";
import { GET_WORD_API_ENDPOINT } from "../utils/constants";
import useFetch from "./useFetch";

function useWord(difficultyLevel, onSuccesfulEntry) {
  const [word, setWord] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const { data, refetch } = useFetch(GET_WORD_API_ENDPOINT + difficultyLevel);
  useEffect(() => {
    if (data) {
      setWord(data[0]);
      setIndex(1);
    }
  }, [data]);
  useEffect(() => {
    if (word !== "" && word === text) {
      setText("");
      const prevVal = word;
      if (index >= data.length - 1) refetch();
      else setWord(data[index]);
      onSuccesfulEntry(prevVal);
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
  }, [text, word, onSuccesfulEntry, index, data, refetch]);
  return { word, text, setText };
}
export default useWord;

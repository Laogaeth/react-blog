//custom hook for reusability

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    //setTimeout here to mimic irl behavior
    setTimeout(() => {
      //returns a promise
      fetch(url, {signal : abortConst.signal})
        .then((res) => {
          //if the server status not ok give an error
          if (!res.ok) {
            throw Error("We could not get the data for you.");
          }
          return res.json();
        })
        //to get the data (from db.json)
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === "AbortError"){
            console.log("fetch aborted")
          }
          //if it throws an error remove the loading message
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
    return () => (abortConst.abort())
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;

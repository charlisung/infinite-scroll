import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("There is an error...");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default UseFetch;

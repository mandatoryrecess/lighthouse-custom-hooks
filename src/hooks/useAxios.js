import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = function (url) {
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    axios.get(url)
      .then(res => {
        setError(null);
        setBody(res.data);
      })
      .catch(err => {
        setBody(null);
        setError(err.message);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return { body, error, pending };
};

export default useAxios;
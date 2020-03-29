import {useState, useEffect} from "react";

export default function useFetchForecast(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData([...data.list]))
  }, []);

  return data;
}


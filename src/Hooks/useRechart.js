import { useEffect, useState } from "react";

const useRechart = () => {
  const [rechartData, setRechartData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRechartData(data));
  }, []);
  return [rechartData, setRechartData];
};

export default useRechart;

import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quickgold.es/archivos-cache/Fixingmadrid.txt")
      .then((response) => response.json())
      .then((madrid) => {
        setData(madrid);
        setLoading(true);
      });
  }, []);
  return {
    data,
    loading,
  };
};

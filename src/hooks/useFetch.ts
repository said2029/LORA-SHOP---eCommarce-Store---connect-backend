import { useEffect, useState } from "react";

const useFetch = (path_name: string) => {
  const [respons, setrespons] = useState({} as any);
  useEffect(() => {
    fetch(path_name)
      .then((res) => res.json())
      .then((data) => setrespons(data))
      .catch((err) => console.error(err));
  }, []);
  return respons;
};

export default useFetch;

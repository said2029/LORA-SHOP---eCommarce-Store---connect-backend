import { useEffect, useState } from "react";

const useFetch =(path_name: string) => {
  const [respons, setrespons] = useState({} as any);
  useEffect(() => {
    try {

      fetch(path_name,{cache:"force-cache"})
        .then((res) => res.json())
        .then((data) => setrespons(data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return respons;
};

export default useFetch;

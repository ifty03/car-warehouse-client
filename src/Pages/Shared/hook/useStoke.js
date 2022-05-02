import React, { useEffect, useState } from "react";
const useStoke = () => {
  const [stokes, setStokes] = useState([]);

  useEffect(() => {
    fetch("https://car-warehouse-as-11.firebaseapp.com/stoke")
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, []);
  return [stokes, setStokes];
};
export default useStoke;

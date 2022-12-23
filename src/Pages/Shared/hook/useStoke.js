import React, { useEffect, useState } from "react";
const useStoke = () => {
  const [stokes, setStokes] = useState([]);

  useEffect(() => {
    fetch("https://car-warehouse-server-production.up.railway.app/stoke")
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, []);
  return [stokes, setStokes];
};
export default useStoke;

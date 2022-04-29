import React, { useEffect, useState } from "react";
const useStoke = () => {
  const [stokes, setStokes] = useState();

  useEffect(() => {
    fetch("https://stark-journey-45418.herokuapp.com/stoke")
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, []);
  return [stokes, setStokes];
};
export default useStoke;

import { useState } from "react";

const useNotification = () => {
  const [notify, setNotify] = useState([]);
  return [notify, setNotify];
};
export default useNotification;

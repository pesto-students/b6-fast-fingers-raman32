import React, { useEffect, useRef, useState } from "react";
import "./index.css";
function SnackBar({ type, message, show }) {
  const [display, setdisplay] = useState(false);
  let timeOut = useRef(null);
  useEffect(() => {
    if (show) {
      setdisplay(show);
      timeOut.current = setTimeout(() => setdisplay(false), 2000);
    }
  }, [show]);
  return <div className={`snackbar ${display ? "show" : ""}`}>{message}</div>;
}
export default SnackBar;

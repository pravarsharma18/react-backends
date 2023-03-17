import { useEffect, useRef } from "react";

const connect = () => console.log("connecting..");
const disConnect = () => console.log("disConnecting..");

const Text = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  //
  useEffect(() => {
    // Side Effect
    if (nameRef.current) nameRef.current.focus();
  });
  useEffect(() => {
    document.title = "My App";
  });
  useEffect(() => {
    connect();
    // clean up code
    return () => disConnect();
  });
  return (
    <div>
      <input ref={nameRef} type="text" className="form-control" />
    </div>
  );
};

export default Text;

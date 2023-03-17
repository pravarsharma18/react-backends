import { useEffect, useRef } from "react";

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
  return (
    <div>
      <input ref={nameRef} type="text" className="form-control" />
    </div>
  );
};

export default Text;

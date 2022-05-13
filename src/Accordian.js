import { useState } from "react";

const Accordian = () => {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <h1>This is Manual Accordian</h1>
      {show ? <h1>This is shown</h1> : null}
      <br />
      {show ? (
        <button onClick={handleShow}>Show</button>
      ) : (
        <button onClick={handleShow}>Hide</button>
      )}
    </>
  );
};

export default Accordian;

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Admin = () => {
  const [text, settext] = useState("");
  const [num, setnum] = useState("");
  const dispatch = useDispatch();
  const sendSum = () => {
    let data = { id: Date.now(), kurs: [text, num] };
    dispatch({ type: "add", payload: data });
    settext("");
    setnum("");
  };
  return (
    <div>
      <h1 className="text-center text-uppercase fs-1">admin</h1>
      <input
        type="text"
        className="form-control w-25 mx-auto d-block mb-3"
        placeholder="valyuta nomi "
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <input
        type="text"
        className="form-control w-25 mx-auto d-block mb-3"
        placeholder="hozirgi qiymati"
        value={num}
        onChange={(e) => setnum(e.target.value)}
      />
      <button
        onClick={sendSum}
        className="btn btn-success w-25 mx-auto d-block"
      >
        send
      </button>
    </div>
  );
};

export default Admin;

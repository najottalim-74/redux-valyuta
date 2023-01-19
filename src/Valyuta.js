import React, { useState } from "react";
import { useSelector } from "react-redux";

const Valyuta = () => {
  const store = useSelector((store) => store.valyutaReducer);
  const [sum, setsum] = useState();
  const [kurs, setkurs] = useState(store[0].kurs);
  console.log(kurs);
  return (
    <>
      <h1 className="text-center text-uppercase fs-1">valyuta kursi</h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="uzbek sumi  ..."
          value={sum}
          onChange={(e) => setsum(e.target.value)}
        />
        <select
          className="form-control w-25"
          onChange={(e) => {
            store.map((data) => {
              if (data.id == e.target.value) setkurs(data.kurs);
            });
          }}
        >
          {store.map((v) => (
            <option value={v.id}>{v.kurs[0]}</option>
          ))}
        </select>
      </div>
      {sum && (
        <h1 className="text-center text-uppercase fs-1">
          {sum * parseInt(kurs[1])} {kurs[0]}
        </h1>
      )}
    </>
  );
};

export default Valyuta;

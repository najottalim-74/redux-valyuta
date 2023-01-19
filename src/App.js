import React, { useState } from "react";
import Admin from "./Admin";
import Valyuta from "./Valyuta";

const App = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="container mt-5">
      <button
        className="w-50 btn btn-danger mx-auto d-block mb-5"
        onClick={() => setstate((data) => !data)}
      >
        Login
      </button>
      {state ? <Admin /> : <Valyuta />}
    </div>
  );
};

export default App;

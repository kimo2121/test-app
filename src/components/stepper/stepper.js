import React, { useState } from "react";
import "./styles.css";
const Stepper = () => {
  const [first, setfirst] = useState("first");
  return (
    <div className="stepper">
      <div
        onClick={() => setfirst("first")}
        className={
          first === "first" || "second"
            ? "stepper-provider active"
            : "stepper-provider"
        }
      >
        <p>1</p>
        <span>Provider</span>
      </div>
      <div className="stepper-line"></div>
      <div
        onClick={() => setfirst("second")}
        className={
          first === "second" ? "stepper-provider active" : "stepper-provider"
        }
      >
        <p>2</p>
        <span>Cost</span>
      </div>
    </div>
  );
};

export default Stepper;

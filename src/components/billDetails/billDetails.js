import React, { useState } from "react";
import Stepper from "../stepper/stepper";
import "./styles.css";

const BillingDetails = () => {
  const [boolean, setBoolean] = useState(true);
  return (
    <div className="billing-page">
      <h1>Medical bill details</h1>
      <Stepper />
      <div className="billiling-form">
        <div className="medical-condition">
          <label htmlFor="">
            Medical condition or treatment <span>(required)</span>
          </label>
          <input type="text" />
        </div>
        <div className="yes-no">
          <label htmlFor="">
            Did you have insurance? <span>(required)</span>
          </label>
          <div>
            <button
              className={boolean === true ? "btn-yes active" : "btn-yes"}
              onClick={() => setBoolean(true)}
            >
              Yes
            </button>
            <button
              className={boolean === false ? "btn-yes active" : "btn-yes"}
              onClick={() => setBoolean(false)}
            >
              No
            </button>
          </div>
        </div>
        <div className="upload-file">
          <label htmlFor="">Upload invoice? (optional)</label>
          <div className="upload-border">
            <button>Add images</button>
          </div>
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
};

export default BillingDetails;

import React from "react";
import { useState } from "react";
import Step2 from '../Step2/index'
const PopUp2 = (props) => {
    const [option2, setOption2]= useState('0')
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose, props.handleLoginClick}>x</span>
        <Step2 handle={props.handleClose} handleLoginClick={props.handleLoginClick} />
      </div>
    </div>
  );
};

export default PopUp2;
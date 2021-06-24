import React from "react";
import { useState } from "react";
import Step3 from '../Step3/index'
const PopUp2 = (props) => {
    const [option2, setOption2]= useState('0')
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose, props.handleLoginClick}>x</span>
          <Step3 handle={props.handleClose} width={props.width} />
      </div>
    </div>
  );
};

export default PopUp2;
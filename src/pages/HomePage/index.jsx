
import "./styles.css";
import React, { useState } from 'react';
import PopUp from './PopUp';
import LoginForm from "./LoginForm";

function Index() {

  const [isOpen, setIsOpen] = useState(false);

  const [isShowLogin, setIsShowLogin] = useState(true);
  const [bg,setBg] =useState("#fff");

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    if(isShowLogin== true){
    setBg("rgba(0,0,0,0.3")
    }
    else{
      setBg("#fff")
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div style={{backgroundColor: bg, position:'inherit'}}>
    {/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}

<div style={{position:'fixed',}}>
    <span onClick={handleLoginClick} className="loginicon">
          Sign In
        </span>
</div>

 <PopUp handleClose={isShowLogin} handleLoginClick={handleLoginClick}/>

{/* <LoginForm isShowLogin={isShowLogin} /> */}
{/*
    {isOpen && <PopUp
      handleClose={togglePopup}
    />} */}
  </div>
}

export default Index;
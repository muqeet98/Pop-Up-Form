// import React, { Component } from 'react';
// import Step1 from '../Step1/index';
// import { useHistory, useLocation } from 'react-router-dom';
// const Index = () => {
// 	const history=useHistory()
// 	return (
// 		<div>
// 			<button className="travel-button about-view" onClick={()=> history.push({pathname: '/step1'})}> SignUp</button>
// 		</div>
// 	);
// };
// export default Index;

import "./styles.css";
import React, { useState } from 'react';
import PopUp from './PopUp';
import LoginForm from "./LoginForm";

function Index() {

  const [isOpen, setIsOpen] = useState(false);

  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    {/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}


    <span onClick={handleLoginClick} className="loginicon">
          Sign In
        </span>


 <PopUp handleClose={isShowLogin} handleLoginClick={handleLoginClick}/>
{/* <LoginForm isShowLogin={isShowLogin} /> */}
{/* 
    {isOpen && <PopUp
      handleClose={togglePopup}
    />} */}
  </div>
}

export default Index;
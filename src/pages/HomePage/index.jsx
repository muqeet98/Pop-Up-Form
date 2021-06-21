import React, { Component } from 'react';
import Step1 from '../Step1/index';
import { useHistory, useLocation } from 'react-router-dom';
const Index = () => {
	const history=useHistory()
	return (
		<div>
			<button className="travel-button about-view" onClick={()=> history.push({pathname: '/step1'})}> SignUp</button>
		</div>
	);
};
export default Index;

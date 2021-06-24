import React, { Component, useState } from 'react';
import Foothagelength from '../../../components/Footagelength/index';
import Budget from '../../../components/Budget/index';
import AnimationMethod from '../../../components/AnimationMethod/index';
import { Link } from 'react-router-dom';
import Star from '../../../components/Star';
import PopUp2 from '../../HomePage/PopUp2';
const Index = () => {
	const [ about, setAbout ] = useState('');
	const [ preflength, setPreflength ] = useState('');
	const [ lengthProvided, setLengthProvided ] = useState('');
	const [ lengthOther, setLengthOther ] = useState('');
	const [ budget, setBudget ] = useState('');
	const [ budget_other, setBudgetOther ] = useState('');
	const [ method, setMethod ] = useState('');
	const [ method_other, setMethodOther ] = useState('');
	const [ isOpen, setIsOpen ] = useState(false);
	
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	const GetBudget = (budget, budget_other) => {
		setBudget(budget);
		setBudgetOther(budget_other);
	};

	const GetMethod = (method, method_other) => {
		setMethod(method);
		setMethodOther(method_other);
	};
	const GetFootageLen = (lengthProvided, lengthOther) => {
		setLengthProvided(lengthProvided);
		setLengthOther(lengthOther);
	};

	return (
		<div className="container">
			<div>
				<div className="margin5">
					<div className="row container">
						<label className="headerfont">Tell us about your Project.</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<div class="col-lg-11 col-md-12 col-sm-12">
							<textarea
								rows="4"
								value={about}
								onChange={(e) => setAbout(e.target.value)}
								class="form-control textarea"
								placeholder=""
							/>
						</div>
					</div>
					<div className="margin" />
				</div>
				<div className="margin5">
					<div className="container row">
						<label className="headerfont">Please specify the length of the video you prefer.</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<div className="col-lg-11 col-md-6 col-sm-12">
							<input
								value={preflength}
								onChange={(e) => setPreflength(e.target.value)}
								type="text"
								name="preferlen"
								className="form-control"
							/>
						</div>
					</div>
					<div className="margin" />
				</div>
				<div className="margin5">
					<div className="container row">
						<label className="headerfont">Animation Method?</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<AnimationMethod parentCallback={GetMethod} />
					</div>
					<div className="margin" />
				</div>
				<div className="margin5">
					<div className="container row">
						<label className="headerfont">What is the lenght of the footage you will be providing?</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<Foothagelength parentCallback={GetFootageLen} />
					</div>
					<div className="margin" />
				</div>
				<div className="margin5">
					<div className="container row">
						<label className="headerfont">What is your budget?</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<Budget parentCallback={GetBudget} />
					</div>
					<div className="margin" />
				</div>
				{about != '' && preflength != '' && lengthProvided != '' && budget != '' && method != '' ? (
					<div className="margin5" style={{ textAlign: 'center', padding: 15 }}>
						<button className="travel-button about-view" onClick={togglePopup}>
							Next
						</button>
						{isOpen && <PopUp2 handleClose={togglePopup} />}
					</div>
				) : (
					<div className="margin5" style={{ textAlign: 'center', padding: 15 }}>
						<button className="travel-button about-view" onClick={() => alert('Please Select All Options')}>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Index;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foothagelength from '../../../components/Footagelength/index';
import Budget from '../../../components/Budget/index';
import { useState } from 'react';
import { useEffect } from 'react';
import Star from '../../../components/Star';
import PopUp2 from '../../HomePage/PopUp2';

const Index = ({width, handleLoginClick, parentCallback, pref_length}) => {
	const [ about, setAbout ] = useState('');
	const [ preflength, setPreflength ] = useState('');
	const [ lengthProvided, setLengthProvided ] = useState('');
	const [ budget, setBudget ] = useState('');
	const [ lengthOther, setLengthOther ] = useState('');
	const [ budget_other, setBudgetOther ] = useState('');

	const [ isOpen, setIsOpen ] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const GetBudget = (budget, budget_other) => {
		setBudget(budget);
		setBudgetOther(budget_other);
	};

	const GetFootageLen = (lengthProvided, budget_other) => {
		setLengthProvided(lengthProvided);
		setLengthOther(budget_other);
        // prov_length(lengthProvided);
	};

	const onValueChange=(e)=>{
		parentCallback(about)
		setAbout(e.target.value)
	}

	const onPrefLength=(event) => {
		pref_length(preflength)
		setPreflength(event.target.value)
	}

	return (
		<div className="">
			<div>
				<div className="margin5">
					<div className="container row">
						<label className="headerfont">Tell us about Your Project</label>
						<Star />
					</div>
					<div className="margin" />
					<div className="">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<textarea
								rows="4"
								value={about}
								onChange={onValueChange}
								class="form-control textarea"
								placeholder=""
								// onClick={()=>parentCallback(about)}
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
						<div className="col-lg-12 col-md-6 col-sm-12">
							<input
								value={preflength}
								onChange={onPrefLength}
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
						<label className="headerfont">What is the length of the footage you will be providing?</label>

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

					</div>
					<div className="margin" />
					<div className="">
						<Budget parentCallback={GetBudget} />
					</div>
					<div className="margin" />
				</div>
				{about != '' && preflength != '' ? (
					<div className="margin5" style={{ textAlign: 'center', padding: 15 }}>
						<button className="travel-button about-view" onClick={togglePopup}>
							Next
						</button>
						{isOpen && <PopUp2 handleClose={togglePopup} handleLoginClick={handleLoginClick} />}
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

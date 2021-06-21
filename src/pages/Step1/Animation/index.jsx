import React, { Component, useState } from 'react';
import Foothagelength from '../../../components/Footagelength/index';
import Budget from '../../../components/Budget/index';
import AnimationMethod from '../../../components/AnimationMethod/index';
import { Link } from 'react-router-dom';
const Index = () => {
	const [ about, setAbout ] = useState('');
	const [ preflength, setPreflength ] = useState('');
	const [ lengthProvided, setLengthProvided ] = useState('');
	const [ budget, setBudget ] = useState('');
	const [ method, setMethod ] = useState('');

	const GetMethod = (method) => {
		setMethod(method);
	};
	const GetFootageLen = (lengthProvided) => {
		setLengthProvided(lengthProvided);
	};
	const GetBudget = (budget) => {
		setBudget(budget);
	};
	return (
		<div className="container">
			<div>
				<div className="margin5">
					<div className="">
						<h5>Tell us about your Project</h5>
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
					<div className="">
						<h5>Please specify the length of the video you prefer.</h5>
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
					<div className="">
						<h5>Animation Method</h5>
					</div>
					<div className="margin" />
					<div className="">
						<AnimationMethod parentCallback={GetMethod} />
						<label>{method}</label>
					</div>
					<div className="margin" />
				</div>
				<div className="margin5">
					<div className="">
						<h5>What is the lenght of the footage you will be providing?</h5>
					</div>
					<div className="margin" />
					<div className="">
						<Foothagelength parentCallback={GetFootageLen} />
					</div>
					<div className="margin" />
				</div>

				<div className="margin5">
					<div className="">
						<h5>What is your budget?</h5>
					</div>
					<div className="margin" />
					<div className="">
						<Budget parentCallback={GetBudget} />
						<label>{budget}</label>
					</div>
					<div className="margin" />
				</div>
				{about != '' && preflength != '' && lengthProvided != '' && budget != '' && method != '' ? (
					<div className="margin5" style={{ textAlign: 'center', padding: 15 }}>
						<Link to="/step2">
							<button className="travel-button about-view">Next</button>
						</Link>
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

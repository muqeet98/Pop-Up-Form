import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

class index extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Flexible',
			selectedOption: '',
			value: '',
			date: ''
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDate = this.handleDate.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleDate(event) {
		this.setState({ date: event.target.value });
	}
	onValueChange(event) {
		this.setState({
			selectedOption: event.target.value
		});
	}
	formSubmit(event) {
		event.preventDefault();
		console.log(this.state.selectedOption);
	}
	render() {
		return (
			<div className="container">
				<div className="container finalcontainer">
					<div className="container">
						<h2>Request an Estimate</h2>
						<div className="margin" />
						<div style={{ textAlign: 'center' }}>
							<label>Page 2/3</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="progress">
							<div className="progress-bar" style={{ width: '33%' }}>
								33%
							</div>
						</div>
					</div>
					<div className="margin5" />
					<div className="container">
						<h5>When do you need the Project done? *</h5>
					</div>
					<div className="margin" />
					<div className="container">
						<form style={{ justifyContent: 'space-evenly' }} onSubmit={this.formSubmit}>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Flexble"
										checked={this.state.selectedOption === 'Flexble'}
										onChange={this.onValueChange}
									/>
									I’m flexible
								</label>
							</div>

							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Nextday"
										checked={this.state.selectedOption === 'Nextday'}
										onChange={this.onValueChange}
									/>
									In the next few days
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Possible"
										checked={this.state.selectedOption === 'Possible'}
										onChange={this.onValueChange}
									/>
									As soon as possible
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Fixed"
										checked={this.state.selectedOption === 'Fixed'}
										onChange={this.onValueChange}
									/>
									On one particular date
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="other"
										checked={this.state.selectedOption === 'other'}
										onChange={this.onValueChange}
									/>
									<input
										type="text"
										placeholder="other"
										value=""
										checked={this.state.selectedOption === 'Podcast'}
										onChange={this.onValueChange}
									/>
								</label>
							</div>
						</form>
						<label>{this.state.selectedOption}</label>

						{this.state.selectedOption == 'Fixed' ? (
							<div className="margin5">
								<div className="">
									<h5>Which Date?</h5>
								</div>
								<div className="margin" />
								<div className="">
									<div className="col-lg-10 col-md-6 col-sm-12">
										<input
											type="date"
											name="preferlen"
											className="form-control"
											value={this.state.date}
											onChange={this.handleDate}
										/>
									</div>
								</div>
								<div className="margin" />
							</div>
						) : null}
						<div className="margin5">
							<div className="">
								<h5>Anything else we should know?</h5>
							</div>
							<div className="margin" />
							<div className="">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<textarea
										rows="3"
										name="about"
										class="textarea form-control"
										placeholder=""
										type="text"
										value={this.state.value}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="margin" />
						</div>
						{this.state.value}
						<div className="col-lg-12">
							<div class="row space-between" style={{ padding: 15 }}>
								<div class="about-btn travel-mrt-0">
									<Link to="/step1">
										<button class="about-view travel-btn">Previous</button>
									</Link>
								</div>
								<div class="about-btn travel-mrt-0">
									{this.state.value != '' && this.state.selectedOption != null ? (
										<Link to="/step3">
											<button class="about-view travel-btn">Next</button>
										</Link>
									) : (
										<button
											class="about-view travel-btn"
											onClick={() => alert('Please select All options')}
										>
											Next
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default index;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Star from '../../components/Star';
import PopUp3 from '../HomePage/PopUp3';
const useStyles = makeStyles((theme) => ({
	// container: {
	// 	display: 'flex',
	// 	flexWrap: 'wrap'
	// },
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Flexible',
			selectedOption: '',
			value: '',
			date: '',
			other_option: '',
			isOpen: false,
			width: 45
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDate = this.handleDate.bind(this);
		this.handleOtherDate = this.handleOtherDate.bind(this);
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup(event) {
		// alert("Hello")
		// alert(this.state.isOpen)
		this.setState({isOpen: !this.state.isOpen})
	}

	handleOtherDate(event) {
		this.setState({ selectedOption: 'other' });
		this.setState({ other_option: event.target.value });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		// if(this.state.value==''){
		// 	this.setState({width: this.state.width+15})
		// }

	}
	handleDate(event) {
		this.setState({ date: event.target.value });
	}
	onValueChange(event) {
		this.setState({ other_option: '' });
		this.setState({
			selectedOption: event.target.value
		});
		if(this.state.selectedOption==''){
			this.setState({width: this.state.width+15})
		}
	}
	formSubmit(event) {
		event.preventDefault();
		console.log(this.state.selectedOption);
	}
	render() {
		return (
			<div className="container">
				<div className="container finalcontainer">
					<div style={{ textAlign: 'left' }}className="container">
						<h2>Request an Estimate</h2>
						<div className="margin" />
						<div style={{ textAlign: 'end' }}>
							<label>Step 2/3</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="progress">
							<div className="progress-bar" style={{ width: `${this.state.width}%` }}>
								{this.state.width}
							</div>
						</div>
					</div>
					<div className="margin5" />
					<div className="container">
						<div className="row container">
							<label className="headerfont">When do you need the Project done? </label>
							<Star />
						</div>
					</div>
					<div className="margin" />
					<div className="container">
						<form style={{ textAlign: 'left' }} onSubmit={this.formSubmit}>
							<div className="radio col-lg-4 left-right-padding">
								<label>
									<input
										type="radio"
										value="Flexble"
										checked={this.state.selectedOption === 'Flexble'}
										onChange={this.onValueChange}
									/>
									{'	'}I’m flexible
								</label>
							</div>

							<div className="radio col-lg-4 left-right-padding">
								<label>
									<input
										type="radio"
										value="Nextday"
										checked={this.state.selectedOption === 'Nextday'}
										onChange={this.onValueChange}
									/>
									{'	'}In the next few days
								</label>
							</div>
							<div className="radio col-lg-4 left-right-padding">
								<label>
									<input
										type="radio"
										value="Possible"
										checked={this.state.selectedOption === 'Possible'}
										onChange={this.onValueChange}
									/>
									{'	'}As soon as possible
								</label>
							</div>
							<div className="radio col-lg-4 left-right-padding">
								<label>
									<input
										type="radio"
										value="Fixed"
										checked={this.state.selectedOption === 'Fixed'}
										onChange={this.onValueChange}
									/>
									{'	'}On one particular date
								</label>
							</div>
							<div className="radio col-lg-4 left-right-padding">
								<label>
									<input
										type="radio"
										value="other"
										checked={this.state.selectedOption === 'other'}
										onChange={this.onValueChange}
									/>
									{'	'}
									<input
										type="text"
										placeholder="Other"
										value={this.state.other_option}
										onChange={this.handleOtherDate}
									/>
								</label>
							</div>
						</form>

						{this.state.selectedOption == 'Fixed' ? (
							<div className="margin5">
								<div className="row container">
									<label className="headerfont">Which Date?</label>
								</div>
								<div className="margin" />
								<div className="">
									<div className="col-lg-12 col-md-6 col-sm-12 left-right-padding">
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
							<div className="row container">
								<label className="headerfont">Anything else we should know?</label>
							</div>
							<div className="margin" />
							<div className="">
								<div class="col-lg-12 col-md-12 col-sm-12 left-right-padding">
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
						<div className="col-lg-12">
							<div class="row space-between" style={{ padding: 15 }}>
								<div class="about-btn travel-mrt-0">
									<button class="about-view travel-btn" onClick={this.props.handle}>
										Previous
									</button>
								</div>
								<div class="about-btn travel-mrt-0">
									{this.state.selectedOption !='' ? (
										<div>
											<button class="about-view travel-btn" onClick={ this.togglePopup }>Next</button>
											{this.state.isOpen && <PopUp3 handleClose={this.togglePopup} width={this.state.width} handleLoginClick={this.props.handleLoginClick}/>}
										</div>
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class index extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Flexible',
			fname: '',
			lname: '',
			phone: '',
			email: '',
			company: '',
			call_date: '',
			time: '',
			selectedOption: 'No'
		};
		this.onFname = this.onFname.bind(this);
		this.onLname = this.onLname.bind(this);
		this.onEmail = this.onEmail.bind(this);
		this.onPhone = this.onPhone.bind(this);
		this.onCompany = this.onCompany.bind(this);
		this.onDate = this.onDate.bind(this);
		this.onTime = this.onTime.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.onValueChange = this.onValueChange.bind(this);
	}
	onFname(event) {
		this.setState({ fname: event.target.value });
	}
	onLname(event) {
		this.setState({ lname: event.target.value });
	}
	onPhone(event) {
		this.setState({ phone: event.target.value });
	}
	onEmail(event) {
		this.setState({ email: event.target.value });
	}
	onCompany(event) {
		this.setState({ company: event.target.value });
	}
	onDate(event) {
		this.setState({ call_date: event.target.value });
	}
	onTime(event) {
		this.setState({ call_time: event.target.value });
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
				<div className="finalcontainer container">
					<div className="">
						<h2>Request an Estimate</h2>
						<div className="margin" />
						<div style={{ textAlign: 'center' }}>
							<label>Page 3/3</label>
						</div>
					</div>
					<div className="col-lg-12 col-md-8 col-sm-4">
						<div className="progress">
							<div className="progress-bar" style={{ width: '66%' }}>
								66%
							</div>
						</div>
					</div>
					<div className="margin5" />
					<div className="">
						<h5>How can we contact You?</h5>
					</div>
					<div className="margin" />
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-4 col-sm-12">
								<div className="single-tab-select-box">
									<h2>Name</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-3 col-sm-4">
								<div>
									<input
										type="text"
										name="country"
										className="form-control"
										value={this.state.fname}
										onChange={this.onFname}
									/>
									<div className="margin" />
									<label>First</label>
								</div>
							</div>
							<div className="col-lg-6 col-md-3 col-sm-4 ">
								<div>
									<input
										type="text"
										name="check_in"
										className="form-control"
										value={this.state.lname}
										onChange={this.onLname}
									/>
									<div className="margin" />
									<label>Last</label>
								</div>
							</div>
						</div>
						<div className="margin" />
						<div className="row">
							<div className="col-lg-12 col-md-3 col-sm-4">
								<div>
									<h5>Phone</h5>
									<div className="margin" />
									<input
										type="text"
										name="country"
										className="form-control"
										value={this.state.phone}
										onChange={this.onPhone}
									/>
									<div className="margin" />
								</div>
							</div>
						</div>
						<div className="margin" />
						<div className="row">
							<div className="col-lg-12 col-md-3 col-sm-4">
								<div>
									<h5>Email</h5>
									<div className="margin" />
									<input
										type="text"
										name="country"
										className="form-control"
										value={this.state.email}
										onChange={this.onEmail}
									/>
									<div className="margin" />
								</div>
							</div>
						</div>
						<div className="margin" />
						<div className="row">
							<div className="col-lg-12 col-md-3 col-sm-4">
								<div>
									<h5>Company</h5>
									<div className="margin" />
									<input
										type="text"
										name="country"
										className="form-control"
										value={this.state.company}
										onChange={this.onCompany}
									/>
									<div className="margin" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-10 col-md-3 col-sm-4">
								<div>
									<h5>Would you Like to schedule a call?</h5>
									<div className="margin" />
									<form className="row " onSubmit={this.formSubmit}>
										<div className="radio col-lg-1">
											<label>
												<input
													type="radio"
													value="Yes"
													checked={this.state.selectedOption === 'Yes'}
													onChange={this.onValueChange}
												/>
												Yes
											</label>
										</div>

										<div className="radio col-lg-1">
											<label>
												<input
													type="radio"
													value="No"
													checked={this.state.selectedOption === 'No'}
													onChange={this.onValueChange}
												/>
												No
											</label>
										</div>
									</form>
									<div className="margin" />
								</div>
							</div>
						</div>

						{this.state.selectedOption == 'Yes' ? (
							<div>
								<div className="margin" />
								<div className="row">
									<div className="col-lg-12 col-md-3 col-sm-4">
										<div>
											<h5>Select a Date you would like us to call you?</h5>
											<div className="margin" />
											<input
												type="date"
												name="calldate"
												className="form-control"
												value={this.state.call_date}
												onChange={this.onDate}
											/>
											<div className="margin" />
										</div>
									</div>
								</div>
								<div className="margin" />
								<div className="row">
									<div className="col-lg-12 col-md-3 col-sm-4">
										<div>
											<h5>Enter a time when we can reach you?</h5>
											<div className="margin" />
											<input
												type="time"
												id="calltime"
												name="calltime"
												className="form-control"
												value={this.state.call_time}
												onChange={this.onTime}
											/>
											<div className="margin" />
										</div>
									</div>
								</div>
							</div>
						) : null}
						<div className="col-lg-12">
							<div class="row space-between" style={{ padding: 15 }}>
								<div class="about-btn travel-mrt-0">
									<Link to="/step2">
										<button class="about-view travel-btn">Previous</button>
									</Link>
								</div>
								<div class="about-btn travel-mrt-0">
									{this.state.fname != '' &&
									this.state.lname != '' &&
									this.state.phone != '' &&
									this.state.email != '' ? (
										<Link to="">
											<button class="about-view travel-btn">Submit</button>
										</Link>
									) : (
										<button
											class="about-view travel-btn"
											onClick={() => alert('Please Select All Options')}
										>
											Submit
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

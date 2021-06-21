import React, { Component } from 'react';
class index extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			selectedOption: ""
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		props.parentCallback(this.state.selectedOption);
	}

	onValueChange(event) {
		this.props.parentCallback(this.state.selectedOption);
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
						<form className="paddingleft30" onSubmit={this.formSubmit}>
							<div className="radio col-log-6">
								<label>
									<input
										type="radio"
										value="less50"
										checked={this.state.selectedOption === 'less50'}
										onChange={this.onValueChange}
										onClick={this.props.parentCallback(this.state.selectedOption)}
									/>
								    Under 50
								</label>
							</div>

							<div className="radio col-log-6">
								<label>
									<input
										type="radio"
										value="upto100"
										checked={this.state.selectedOption === 'upto100'}
										onChange={this.onValueChange}
									/>
								    $ 50 - $ 100
								</label>
							</div>
							<div className="radio col-log-6">
								<label>
									<input
										type="radio"
										value="upto500"
										checked={this.state.selectedOption === 'upto500'}
										onChange={this.onValueChange}
									/>
									$100 -$ 500
								</label>
							</div>
							<div className="radio col-log-6">
								<label>
									<input
										type="radio"
										value="upto1000"
										checked={this.state.selectedOption === 'upto1000'}
										onChange={this.onValueChange}
									/>
									$ 500 - $ 1000
								</label>
							</div>
							<div className=" row radio col-lg-6">
								<label>
									<input
										type="radio"
										value="other"
										checked={this.state.selectedOption === 'other'}
										onChange={this.onValueChange}
									/>
									other
								</label>
                                <div className="paddingleft10">
                                <input
										type="text"
										value=""
										checked={this.state.selectedOption === 'Podcast'}
										onChange={this.onValueChange}
									/>
                                    </div>
							</div>


						</form>


		);
	}
}

export default index;

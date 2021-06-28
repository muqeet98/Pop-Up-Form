import React, { Component } from 'react';
class index extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			selectedOption: '',
			length_other: ''
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.onLengthOther = this.onLengthOther.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		props.parentCallback(this.state.selectedOption, this.state.length_other);
	}
	onLengthOther(event) {
		this.setState({ selectedOption: 'other' });
		this.setState({ length_other: event.target.value });
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
							value="less30"
							checked={this.state.selectedOption === 'less30'}
							onChange={this.onValueChange}
							onClick={this.props.parentCallback(this.state.selectedOption)}
						/>
						{'	'}Less then 30 minutes
					</label>
				</div>

				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="less1h"
							checked={this.state.selectedOption === 'less1h'}
							onChange={this.onValueChange}
						/>
						{'	'}30 to 1 hours
					</label>
				</div>
				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="twohours"
							checked={this.state.selectedOption === 'twohours'}
							onChange={this.onValueChange}
						/>
						{'	'}2 hours
					</label>
				</div>
				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="threehours"
							checked={this.state.selectedOption === 'threehours'}
							onChange={this.onValueChange}
						/>
						{'	'}3 hours
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
						{'	'}
					</label>
					<div className="paddingleft10">
						<input
						placeholder="Other"
						className="form-control"
							type="text"
							value={this.state.length_other}
							onChange={this.onLengthOther}
							onClick={this.props.parentCallback(this.state.selectedOption, this.state.length_other)}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default index;

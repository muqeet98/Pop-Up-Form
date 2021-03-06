import React, { Component } from 'react';
class index extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			selectedOption: "",
			method_other:""
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.onMethodChange = this.onMethodChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		props.parentCallback(this.state.selectedOption, this.state.method_other);
	}
	onValueChange(event) {
		this.props.parentCallback(this.state.selectedOption, this.state.method_other);
		this.setState({
			selectedOption: event.target.value
		});
	}
	onMethodChange(event) {
		this.setState({selectedOption: 'other'})
		this.props.parentCallback(this.state.selectedOption, this.state.method_other);
		this.setState({
			method_other: event.target.value
		});
	}
	formSubmit(event) {
		event.preventDefault();
		console.log(this.state.selectedOption);
	}
	render() {
		return (
			<form className="" onSubmit={this.formSubmit}>
				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="digital"
							checked={this.state.selectedOption === 'digital'}
							onChange={this.onValueChange}
							onClick={this.props.parentCallback(this.state.selectedOption)}
						/>
						{"	"}Digital
					</label>
				</div>

				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="stopmotion"
							checked={this.state.selectedOption === 'stopmotion'}
							onChange={this.onValueChange}
						/>
						{"	"}Stop-Motion
					</label>
				</div>
				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="lyrical"
							checked={this.state.selectedOption === 'lyrical'}
							onChange={this.onValueChange}
						/>
						{"	"}Lyrical video
					</label>
				</div>
				<div className="radio col-log-6">
					<label>
						<input
							type="radio"
							value="whiteboard"
							checked={this.state.selectedOption === 'whiteboard'}
							onChange={this.onValueChange}
						/>
						{"	"}Whiteboard animation
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
					{"	"}	Other
					</label>
					<div className="paddingleft10">
						<input
							type="text"
							value={this.state.method_other}
							// checked={this.state.selectedOption === 'Podcast'}
							onChange={this.onMethodChange}
							onClick={this.props.parentCallback(this.state.selectedOption, this.state.method_other)}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default index;

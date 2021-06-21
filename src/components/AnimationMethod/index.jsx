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
							value="digital"
							checked={this.state.selectedOption === 'digital'}
							onChange={this.onValueChange}
							onClick={this.props.parentCallback(this.state.selectedOption)}
						/>
						Digital
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
						Stop-Motion
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
						Lyrical video
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
						Whiteboard animation
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
							// checked={this.state.selectedOption === 'Podcast'}
							onChange={this.onValueChange}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default index;

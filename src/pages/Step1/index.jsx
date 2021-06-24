// const width = window.width;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wedding from './Wedding/index';
import Animation from './Animation/index';
import Voiceover from './Voiceover/index';
import Star from '../../components/Star';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			selectedOption: '',
			length: '',
			other_input: '',
			width: 0
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange(event) {
		this.setState({
			other_input: event.target.value
		});
	}

	onValueChange(event) {
		this.setState({
			selectedOption: event.target.value
		});

		if (this.state.selectedOption == '') {
			this.setState({ width: this.state.width + 5 });
		}
	}

	formSubmit(event) {
		event.preventDefault();
		console.log(this.state.selectedOption);
	}

	render() {
		return (
			<div style={{ position: 'relative' }} className="container">
				<div className="container finalcontainer">
					<div className="container">
						<h2>Request an Estimate</h2>
						<div className="margin" />
						<div style={{ textAlign: 'end' }}>
							<label>Step 1/3</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="progress">
							<div className="progress-bar1" style={{ width: `${this.state.width}%` }}>
								{this.state.width}
							</div>
						</div>
					</div>

					<div className="margin5" />
					<div className="container">
						<div className="row container">
							<label className="headerfont">What type of video are you producing?</label>
							<Star />
						</div>
					</div>
					<div className="margin" />
					<div className="container">
						<form style={{ justifyContent: 'space-evenly' }} className="row " onSubmit={this.formSubmit}>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Wedding"
										checked={this.state.selectedOption === 'Wedding'}
										onChange={this.onValueChange}
									/>
									{'	'}Wedding
								</label>
							</div>

							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Holiday"
										checked={this.state.selectedOption === 'Holiday'}
										onChange={this.onValueChange}
									/>
									{'	'}Holiday
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Corporate"
										checked={this.state.selectedOption === 'Corporate'}
										onChange={this.onValueChange}
									/>
									{'	'} Corporate
								</label>
							</div>
						</form>

						<form className="row " onSubmit={this.formSubmit}>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Gopro"
										checked={this.state.selectedOption === 'Gopro'}
										onChange={this.onValueChange}
									/>
									{'	'} GoPro
								</label>
							</div>

							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Family"
										checked={this.state.selectedOption === 'Family'}
										onChange={this.onValueChange}
									/>
									{'	'}Family
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Drone"
										checked={this.state.selectedOption === 'Drone'}
										onChange={this.onValueChange}
									/>
									{'	'}Drone
								</label>
							</div>
						</form>

						<form className="row " onSubmit={this.formSubmit}>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Commercial"
										checked={this.state.selectedOption === 'Commercial'}
										onChange={this.onValueChange}
									/>
									{'	'}Commercial
								</label>
							</div>

							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Animation"
										checked={this.state.selectedOption === 'Animation'}
										onChange={this.onValueChange}
									/>
									{'	'}Animation
								</label>
							</div>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Podcast"
										checked={this.state.selectedOption === 'Podcast'}
										onChange={this.onValueChange}
									/>
									{'	'}Podcast
								</label>
							</div>
						</form>
						<form className="row " onSubmit={this.formSubmit}>
							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Voiceover"
										checked={this.state.selectedOption === 'Voiceover'}
										onChange={this.onValueChange}
									/>
									{'	'}Voice over
								</label>
							</div>

							<div className="radio col-lg-4">
								<label>
									<input
										type="radio"
										value="Customjob"
										checked={this.state.selectedOption === 'Customjob'}
										onChange={this.onValueChange}
									/>
									{'	'}Custom Job
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
									{'	'}Other
									{/* <input
										type="text"
										placeholder="other"
										value={this.state.other_input}
										// checked={this.state.selectedOption === 'Podcast'}
										onChange={this.onTextChange}
									/> */}
								</label>
							</div>
						</form>
						{this.state.selectedOption == 'Wedding' ? <Wedding width={this.state.width} handleLoginClick={this.props.handleLoginClick} /> : null}
						{this.state.selectedOption == 'Holiday' ? <Wedding /> : null}
						{this.state.selectedOption == 'Corporate' ? <Wedding /> : null}

						{this.state.selectedOption == 'Gopro' ? <Wedding /> : null}
						{this.state.selectedOption == 'Family' ? <Wedding /> : null}
						{this.state.selectedOption == 'Drone' ? <Wedding /> : null}

						{this.state.selectedOption == 'Commercial' ? <Wedding /> : null}
						{this.state.selectedOption == 'Podcast' ? <Wedding /> : null}
						{this.state.selectedOption == 'Animation' ? <Animation /> : null}

						{this.state.selectedOption == 'Voiceover' ? <Voiceover /> : null}
						{this.state.selectedOption == 'Customjob' ? <Wedding /> : null}
						{this.state.selectedOption == 'other' ? <Wedding /> : null}
						{this.state.selectedOption == '' ? (
							<div className="margin5" style={{ textAlign: 'center', padding: 15 }}>
								<button
									className="travel-button about-view"
									onClick={() => alert('Please select any option.')}
								>
									Next
								</button>
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default index;

import React from 'react';
import { useState } from 'react';
import Step1 from '../Step1/index';
const PopUp = ({ handleClose, handleLoginClick }) => {
	const [ option2, setOption2 ] = useState('0');
	return (
		<div>
			<div className={`${handleClose ? 'active' : ''} show `}>
				<div className="box2">
					<span className="close-icon" onClick={handleLoginClick}>
						x
					</span>
					<Step1 handleLoginClick={handleLoginClick} />
				</div>
			</div>
		</div>
	);
};

export default PopUp;

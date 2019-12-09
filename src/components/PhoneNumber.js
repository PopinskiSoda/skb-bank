import React from 'react';
import './PhoneNumber/PhoneNumber.scss';

const PhoneNumber = ({theme}) => (
	<div className={`PhoneNumber${theme === 'light' ? ' PhoneNumber--light' : ''}`}>
		<div className="PhoneNumber__number">8 800 1000 600</div>
		<div className="PhoneNumber__label">Бесплатный звонок по России</div>
	</div>
);

export default PhoneNumber;
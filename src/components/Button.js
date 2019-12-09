import React from 'react';
import './Button/Button.scss';

const Button = ({
	caption,
	theme,
	padding,
	onClick,
	disabled,
	font
}) => {
	const clsName = `Button${theme === 'light' ? ' Button--light' : ''}` + 
					`${padding === 's' ? ' Button--smallPadding' : ''}` + 
					`${padding === 'm' ? ' Button--mediumPadding' : ''}` + 
					`${font === 'gilroy' ? ' Button--gilroy' : ''}` + 
					`${disabled ? ' Button--disabled' : ''}`;

	return (
		<div className={clsName} onClick={disabled ? null : onClick}>
			{caption}
		</div>
	);
};

export default Button;
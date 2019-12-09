import React from 'react';
import { ReactComponent as Logo } from '../images/skb_logo.svg'
import { useHistory, useLocation } from 'react-router-dom';
import './SKBLogo/SKBLogo.scss';

const SKBLogo = () => {
	const history = useHistory();
	const { pathname } = useLocation();

	const isRoot = () => (pathname === '/');
	const handleClick = () => {
		if (!isRoot()) {
			history.push('/');
		}
	}

	return (
		<div className={`SKBLogo${isRoot() ? ' SKBLogo--is-root' : ''}`}
			 onClick={handleClick}>
			<Logo />
		</div>
	);
};

export default SKBLogo;
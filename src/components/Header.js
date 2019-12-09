import React from 'react';
import './Header/Header.scss';
import SKBLogo from './SKBLogo';
import PhoneNumber from './PhoneNumber';

const Header = () => (
	<header className="Header">
		<div className="Header__content">
			<SKBLogo />
			<PhoneNumber />
		</div>
	</header>
);

export default Header;
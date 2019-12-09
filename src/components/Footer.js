import React from 'react';
import './Footer/Footer.scss';
import PhoneNumber from './PhoneNumber';

const Footer = () => (
	<footer className="Footer">
		<div className="Footer__content">
			<div className="Footer__note">
				© СКБ-банк, 2019 Генеральная лицензия № 705 Центрального банка Российской Федерации
				Адрес банка: г. Екатеринбург, ул. Куйбышева, 75
			</div>
			<div className="Footer__link">
				Подробнее об условиях и видах кредитов
			</div>
			<div className="Footer__phone-wrapper">
				<PhoneNumber theme="light"/>
			</div>
		</div>
	</footer>
);

export default Footer;
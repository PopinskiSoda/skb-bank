import React from 'react';
import OfferCard from './OfferCard';
import Icon from './Icon';
import Button from './Button';
import imageSrc from '../images/popov.png';
import triangleImageSrc from '../images/triangle.svg'; 
import { useHistory } from 'react-router-dom';
import './OfferPage/OfferPage.scss';

const OfferPage = () => {
	const history = useHistory();
	const navigateToHomepage = () => {
		history.push(`${process.env.PUBLIC_URL}/`);
	}

	return (
		<div className="OfferPage">
			<Icon name="success"/>
			<div className="OfferPage__header">Поздравляем!</div>
			<div className="OfferPage__note">Иван Иванович! Ваша заявка на кредит наличными одобрена</div>
			<OfferCard />
			<div className="OfferPage__bottom-section">
				<div className="OfferPage__bottom-column">
					<div className="OfferPage__subtitle">Мы ждём вас по адресу:</div>
					<Icon name="mapMarker">
						<div>г. Астрахань, ул. Кирова, 20/3,</div>
						<div>литер А, пом. 37</div>
					</Icon>
				</div>
				<div className="OfferPage__bottom-column">
					<div className="OfferPage__subtitle">Не забудьте с собой взять:</div>
					<div className="OfferPage__icons-group">
						<Icon name="passport">
							<div>паспорт</div>
							<div>гражданина РФ</div>
						</Icon>
						<Icon name="reference">
							<div>справка</div>
							<div>по форме банка</div>
						</Icon>
					</div>
				</div>
			</div>
			<div className="OfferPage__navigation">
				<Button caption="На главную страницу"
						font="gilroy"
						padding="m"
						onClick={navigateToHomepage}/>
			</div>
			<img className="OfferPage__triangle" src={triangleImageSrc} alt={triangleImageSrc} />
			<img className="OfferPage__image" src={imageSrc} alt={imageSrc} />
		</div>
	);
};

export default OfferPage;
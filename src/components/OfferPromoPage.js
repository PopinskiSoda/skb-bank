import React from 'react';
import OfferPromosList from './OfferPromosList';
import './OfferPromoPage/OfferPromoPage.scss';
import imageSrc from '../images/popov.png';

const OfferPromoPage = () => (
	<div className="OfferPromoPage">
		<div className="OfferPromoPage__header">
			<div className="OfferPromoPage__appeal">
				Уважаемый Иван Иванович
			</div>
			<div className="OfferPromoPage__note">
				Специально для Вас мы подготовили несколько предложений по кредитованию.
				Выберите интересующий Вас вариант и нажмите кнопку «Получить деньги» для его получения.
				Если ни один из вариантов Вам не подходит, нажмите кнопку
				«Показать дополнительные предложения»
			</div>
			<div className="OfferPromoPage__note OfferPromoPage__note--faded">
				Обращаем Ваше внимание, что в предложениях указана максимальная сумма кредита.
				В отделении Банка Вы всегда сможете снизить сумму кредита до требуемого размера.
			</div>
		</div>
		<OfferPromosList />
		<img className="OfferPromoPage__image" src={imageSrc} alt={imageSrc} />
	</div>
);

export default OfferPromoPage;
import React from 'react';
import replaceHTMLEntities from '../utils/replaceHTMLEntities';
import pluralize from '../utils/pluralize';
import './OfferPromo/OfferPromo.scss';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const OfferPromo = ({offer, isBestOffer}) => {
	const history = useHistory();
	const openOffer = (offerId) => {
		history.push(`/offer/${offerId}`);
	};

	return (
		<div className="OfferPromo">
			<div className={`OfferPromo__tag${isBestOffer ? ' OfferPromo__tag--is-best-offer' : ''}`}>
				{isBestOffer ? 'Лучшее предложение для Вас' : 'Возможно Вас заинтересует'}
			</div>
			<div className={`OfferPromo__header${offer.under ? ' OfferPromo__header--consumer-credit' : ''}`}>
				{replaceHTMLEntities(offer.product_title)}
			</div>
			{offer.proof_income ? <div className="OfferPromo__note">(Со справкой о доходах)</div> : null}
			<div className="OfferPromo__line">
				<div className="OfferPromo__label">Сумма</div>
				{offer.limit.toLocaleString('ru-RU')} ₽
			</div>
			{offer.payment ? ( 
				<div className="OfferPromo__line">
					<div className="OfferPromo__label">Ежемесячный платеж</div>
					{offer.payment.toLocaleString('ru-RU')} ₽
				</div>
			) : null}
			<div className="OfferPromo__line">
				<div className="OfferPromo__label">Срок</div>
				{offer.term} {pluralize(offer.term, 'месяц', ['', 'а', 'ев'])}
			</div>
			<div className="OfferPromo__line OfferPromo__line--last">
				<div className="OfferPromo__label">Ставка</div>
				{offer.rate.toLocaleString('ru-RU')} %
			</div>
			<Button caption="Получить деньги"
					onClick={() => {openOffer(offer.offer_id)}}/>
		</div>
	);
};

export default OfferPromo;
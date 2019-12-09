import React from 'react';
import offers from '../offers';
import replaceHTMLEntities from '../utils/replaceHTMLEntities';
import pluralize from '../utils/pluralize';
import { useParams } from 'react-router-dom';
import './OfferCard/OfferCard.scss';

const OfferCard = () => {
	const { offerId } = useParams();
	const offer = offers.find((item) => (item.offer_id === offerId));

	return (
		<div className="OfferCard">
			<div className="OfferCard__header">{replaceHTMLEntities(offer.product_title)}</div>
			<div className="OfferCard__content">
				<div className="OfferCard__limit">{offer.limit.toLocaleString('ru-RU')} ₽</div>
				<div className="OfferCard__columns">
					<div className="OfferCard__column">
						<div className="OfferCard__column-value">
							{offer.term} {pluralize(offer.term, 'месяц', ['', 'а', 'ев'])}
						</div>
						<div className="OfferCard__column-label">Срок</div>
					</div>
					{offer.payment ? (
						<div className="OfferCard__column">
							<div className="OfferCard__column-value">
								{offer.payment.toLocaleString('ru-RU')} ₽/мес.
							</div>
							<div className="OfferCard__column-label">Платеж</div>
						</div>
					) : null}
					<div className="OfferCard__column">
						<div className="OfferCard__column-value">
							{offer.rate.toLocaleString('ru-RU')}%
						</div>
						<div className="OfferCard__column-label">Ставка	</div>
					</div>
				</div>
			</div>
			{offer.proof_income ? null : (
				<div className="OfferCard__note">(без справки о доходах по форме банка)</div>
			)}
		</div>
	);
};

export default OfferCard;
import React from 'react';
import offers from '../offers';
import OfferPromo from './OfferPromo';
import Button from './Button';
import {
	useParams,
	useHistory
} from 'react-router-dom';
import './OfferPromosList/OfferPromosList.scss'

const OfferPromosList = () => {
	const pageId = Number(useParams()['pageId']) || 1;
	const lastPageId = Math.floor((offers.length - 1)/2) + 1;
	const history = useHistory();

	const navigate = (str) => {
		let newPageId;
		if (str === 'forward') {
			newPageId = pageId + 1;
		} else {
			newPageId = pageId - 1;
		}
		history.push(`${process.env.PUBLIC_URL}/page/${newPageId}`);
	}

	const sortedOffers = offers.sort((offer1, offer2) => (offer1.priority - offer2.priority))
	const bestOfferId = sortedOffers[0].offer_id;
	const displayedOffers = sortedOffers.slice((pageId - 1)*2, pageId*2);

	return (
		<div className="OfferPromosList">
			<div className="OfferPromosList__items"> 
				{displayedOffers.map(offer => (
					<OfferPromo offer={offer}
								key={offer.offer_id}
								isBestOffer={bestOfferId === offer.offer_id}/>
				))}
			</div>
			{offers.length > 2 ? (
				<div className="OfferPromosList__navigation">
					<Button theme="light" 
							caption="Назад"
							onClick={() => {navigate('back')}}
							disabled={pageId === 1}/>
					<Button theme="light"
							caption="Показать дополнительные предложения"
							padding="s" 
							onClick={() => {navigate('forward')}}
							disabled={pageId === lastPageId}/>
				</div>
			) : null}
		</div>
	);
};

export default OfferPromosList;
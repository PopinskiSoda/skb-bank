import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import './Content/Content.scss';
import OfferPromoPage from './OfferPromoPage';
import OfferPage from './OfferPage';

const Content = () => {
  return (
  	<div className="Content">
      <div className="Content__wrapper">
    		<Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <OfferPromoPage />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/page/:pageId`}>
            <OfferPromoPage />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/offer/:offerId`}>
            <OfferPage />
          </Route>
        </Switch>
      </div>
  	</div>
  );
};

export default Content;
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
          <Route exact path="/">
            <OfferPromoPage />
          </Route>
          <Route path="/page/:pageId">
            <OfferPromoPage />
          </Route>
          <Route path="/offer/:offerId">
            <OfferPage />
          </Route>
        </Switch>
      </div>
  	</div>
  );
};

export default Content;
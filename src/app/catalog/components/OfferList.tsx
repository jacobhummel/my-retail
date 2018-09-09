import * as React from 'react';

import styled from 'react-emotion';

import { IOffer, IOfferPrice } from '../../../api/interfaces/catalog';
import * as styles from '../../shared/styles';

interface IOfferListProps {
  offers: IOffer[];
}

const OfferPrice = styled('div')`
  padding: ${styles.standardGap} 0;
`;

const FormattedPrice = styled('span')`
  font-weight: bold;
  font-size: 28px;
  margin-right: ${styles.sideGap};
`;

const PriceQualifier = styled('span')`
  font-size: 14px;
`;

const OfferList: React.SFC<IOfferListProps> = (props) => {
  return (
    <div>
      {props.offers.map((offer: IOffer) => 
        offer.OfferPrice
          .filter((offerPrice: IOfferPrice) => offerPrice.currencyCode === 'USD') // TODO: use user pref currency
          .map((offerPrice: IOfferPrice) => {
            return (
              <OfferPrice key={offerPrice.priceQualifier}>
                <FormattedPrice>{offerPrice.formattedPriceValue}</FormattedPrice>
                <PriceQualifier>{offerPrice.priceQualifier.toLowerCase()}</PriceQualifier>
              </OfferPrice>
            );
        })
      )}
    </div>
  )
};

export default OfferList;
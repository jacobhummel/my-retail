import * as React from "react";

import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "emotion";
import styled from "react-emotion";

import { IDescription, IPromotion } from "../../../api/interfaces/catalog";
import * as styles from "../../shared/styles";

interface IPromoListProps {
  promos: IPromotion[];
}

const PromoListContainer = styled("div")`
  padding: ${styles.standardGap};
  margin: ${styles.standardGap} 0;
  border-top: 1px solid ${styles.neutralLightColor};
  border-bottom: 1px solid ${styles.neutralLightColor};
`;

const Promo = styled("div")`
  color: ${styles.primaryColor};
  margin: ${styles.standardGap} 0;
`;

const tagIconClassname = css`
  margin-right: ${styles.sideGap};
`;

const PromoList: React.SFC<IPromoListProps> = props => {
  return (
    <PromoListContainer>
      {props.promos.map((promo: IPromotion) => (
        <Promo key={promo.promotionIdentifier}>
          <FontAwesomeIcon icon={faTag} className={tagIconClassname} />
          {promo.Description.map((description: IDescription) => (
            <span key={description.shortDescription}>
              {description.shortDescription}
            </span>
          ))}
        </Promo>
      ))}
    </PromoListContainer>
  );
};

// {props.offers.map((offer: IOffer) =>
//     offer.OfferPrice
//       .filter((offerPrice: IOfferPrice) => offerPrice.currencyCode === 'USD') // TODO: use user pref currency
//       .map((offerPrice: IOfferPrice) => {
//         return (
//           <OfferPrice key={offerPrice.priceQualifier}>
//             <FormattedPrice>{offerPrice.formattedPriceValue}</FormattedPrice>
//             <PriceQualifier>{offerPrice.priceQualifier.toLowerCase()}</PriceQualifier>
//           </OfferPrice>
//         );
//     })
//   )}

export default PromoList;

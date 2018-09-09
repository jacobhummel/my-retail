import * as React from "react";

import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "react-emotion";

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
  font-family: ${styles.fontFamilySecondary};
`;

const Promo = styled("div")`
  color: ${styles.primaryColor};
  margin: ${styles.standardGap} 0;
`;

const tagIconClassname = css`
  margin-right: ${styles.smallGap};
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

export default PromoList;

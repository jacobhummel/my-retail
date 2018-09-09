import * as React from "react";

import * as dayjs from "dayjs";
import styled from "react-emotion";

import { IReview } from "../../../api/interfaces/catalog";
import StarRating from "../../shared/components/StarRating";
import * as styles from "../../shared/styles";

interface IItemReviewProps {
  review: IReview;
}

const ReviewContainer = styled("div")`
  flex: 1;
  font-size: 14px;
  padding-right: ${styles.standardGap};
  font-family: ${styles.fontFamilySecondary};
`;

const ReviewTitle = styled("div")`
  font-weight: bold;
  font-size: 18px;
`;

const ReviewText = styled("div")`
  margin-bottom: ${styles.standardGap};
`;

const LinkToUser = styled("a")`
  margin-right: ${styles.smallGap};
`;

const ItemReview: React.SFC<IItemReviewProps> = props => {
  return (
    <ReviewContainer>
      <div>
        <StarRating
          number={Number.parseInt(props.review.overallRating, 10)}
          size={14}
        />
      </div>
      <ReviewTitle>{props.review.title}</ReviewTitle>
      <ReviewText>{props.review.review}</ReviewText>
      <div>
        <LinkToUser href={`/user/${props.review.customerId}`}>
          {props.review.screenName}
        </LinkToUser>
        <span>{dayjs(props.review.datePosted).format("MMMM d, YYYY")}</span>
      </div>
    </ReviewContainer>
  );
};

export default ItemReview;

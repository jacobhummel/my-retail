import * as React from "react";
import styled from "react-emotion";

import { ICustomerReview, IReview } from "../../../api/interfaces/catalog";
import StarRating from "../../shared/components/StarRating";
import * as styles from "../../shared/styles";
import ItemReview from "./ItemReview";

interface IItemReviewsProps {
  reviews: ICustomerReview;
}

const ItemReviewsHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${styles.standardGap};
  font-weight: bold;
  font-family: ${styles.fontFamilySecondary};
  color: ${styles.textColor};

  a {
    color: ${styles.textColor};

    :hover {
      opacity: 0.9;
    }
  }
`;

const ItemReviewsBodyContainer = styled("div")`
  background-color: #eee;
  padding: 0 ${styles.standardGap};
`;

const BodyContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: ${styles.standardGap} 0;
`;

const BodyCategoryHeader = styled(BodyContainer)`
  border-bottom: 1px solid ${styles.neutralLightColor};
`;

const StarLabel = styled("span")`
  margin-left: ${styles.standardGap};
`;

const ReviewCategory = styled("div")`
  flex: 1;
  font-size: 14px;
  color: ${styles.neutralDarkColor};
`;

const ReviewCategoryHeader = styled("div")`
  font-size: 20px;
  text-transform: uppercase;
  color: ${styles.textColor};
`;

const ItemReviews: React.SFC<IItemReviewsProps> = props => {
  const proReviews: IReview[] = sortMostHelpfulReviewsWithCommentFinder(
    props.reviews.Reviews,
    ["4", "5"]
  );
  const conReviews: IReview[] = sortMostHelpfulReviewsWithCommentFinder(
    props.reviews.Reviews,
    ["1", "2"]
  );

  return (
    <div>
      <ItemReviewsHeader>
        <span>
          <StarRating
            number={Number.parseInt(
              props.reviews.consolidatedOverallRating,
              10
            )}
            size={20}
          >
            <StarLabel>overall</StarLabel>
          </StarRating>
        </span>
        {props.reviews.totalReviews !== "0" && (
          <a href="/">view all {props.reviews.totalReviews} reviews</a>
        )}
      </ItemReviewsHeader>
      {props.reviews.totalReviews !== "0" && (
        <ItemReviewsBodyContainer>
          <BodyCategoryHeader>
            <ReviewCategory>
              <ReviewCategoryHeader>Pro</ReviewCategoryHeader>
              most helpful 4-5 star review
            </ReviewCategory>
            <ReviewCategory>
              <ReviewCategoryHeader>Con</ReviewCategoryHeader>
              most helpful 1-2 star review
            </ReviewCategory>
          </BodyCategoryHeader>
          <BodyContainer>
            <ItemReview review={proReviews[0]} />
            <ItemReview review={conReviews[0]} />
          </BodyContainer>
        </ItemReviewsBodyContainer>
      )}
    </div>
  );
};

const sortMostHelpfulReviewsWithCommentFinder = (
  reviews: IReview[],
  ratingRange?: string[]
): IReview[] => {
  return reviews
    .filter((review: IReview) => {
      return (
        review.review &&
        ratingRange &&
        ratingRange.indexOf(review.overallRating) > -1
      );
    })
    .sort(
      (a: IReview, b: IReview) =>
        Number.parseInt(b.helpfulVotes, 10) -
        Number.parseInt(a.helpfulVotes, 10)
    );
};

export default ItemReviews;

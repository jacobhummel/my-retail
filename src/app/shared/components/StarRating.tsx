import * as React from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "react-emotion";

import * as styles from "../../shared/styles";

export interface IStarRatingProps {
  number: number;
  outOf?: number;
  size?: number;
  children?: JSX.Element;
}

export interface IStarProps {
  filled: number; // emotion didn't like booleans, so used 1/0
  fontSize: number;
}

const Star = styled(FontAwesomeIcon)((props: IStarProps) => ({
  fontSize: props.fontSize,
  color: props.filled ? styles.primaryColor : styles.neutralColor,
  marginRight: styles.smallerGap
}));

class StarRating extends React.Component<IStarRatingProps, {}> {
  public render() {
    const total: number = this.props.outOf || 5;
    const stars: JSX.Element[] = [];

    for (let i: number = 0; i < total; i += 1) {
      stars.push(
        <Star
          key={i}
          filled={i < this.props.number ? 1 : 0}
          icon={faStar}
          fontSize={this.props.size ? this.props.size : 14}
        />
      );
    }

    return (
      <div>
        {stars}
        {this.props.children}
      </div>
    );
  }
}

export default StarRating;

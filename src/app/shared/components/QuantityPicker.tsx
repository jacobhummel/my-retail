import * as React from "react";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { css } from 'emotion';
import styled from "react-emotion";

import * as styles from "../../shared/styles";
import TextButton from "./TextButton";

export interface IQuantityPickerProps {
  onChanged: (quantity: number) => void;
}

export interface IQuantityPickerState {
  quantity: number;
}

const FlexContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${styles.standardGap};
  border: 1px solid ${styles.neutralLightColor};
  padding: 5px ${styles.standardGap};
  border-radius: ${styles.borderRadius};
`;

const FlexColumn = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconButtonContainer = styled(TextButton)`
  max-width: 50%;
  font-size: 24px;
`;

const Quantity = styled("span")`
  font-weight: bold;
  font-size: 20px;
  margin: 0 ${styles.standardGap};
`;

class QuantityPicker extends React.Component<
  IQuantityPickerProps,
  IQuantityPickerState
> {
  constructor(props: IQuantityPickerProps) {
    super(props);

    this.state = {
      quantity: 0
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  public render() {
    return (
      <FlexContainer>
        <FlexColumn>quantity:</FlexColumn>
        <FlexColumn>
          <IconButtonContainer onClick={this.decrement}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </IconButtonContainer>
          <Quantity>{this.state.quantity}</Quantity>
          <IconButtonContainer onClick={this.increment}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </IconButtonContainer>
        </FlexColumn>
      </FlexContainer>
    );
  }

  private decrement() {
    const quantity: number = Math.max(this.state.quantity - 1, 0);

    this.setState({
      quantity
    });

    this.props.onChanged(quantity);
  }

  private increment() {
    const quantity: number = this.state.quantity + 1;

    this.setState({
      quantity
    });

    this.props.onChanged(quantity);
  }
}

export default QuantityPicker;

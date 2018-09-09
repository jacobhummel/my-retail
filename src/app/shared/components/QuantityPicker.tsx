import * as React from "react";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { css } from 'emotion';
import styled from "react-emotion";

import * as styles from "../../shared/styles";

export interface IQuantityPickerProps {}

export interface IQuantityPickerState {}

const FlexContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${styles.standardGap};
  max-width: 50%;
`;

class QuantityPicker extends React.Component<
  IQuantityPickerProps,
  IQuantityPickerState
> {
  constructor(props: IQuantityPickerProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <FlexContainer>
        <div>quantity:</div>
        <div>
          <FontAwesomeIcon icon={faMinusCircle} />
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </FlexContainer>
    );
  }
}

export default QuantityPicker;

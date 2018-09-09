import * as React from "react";
import styled from "react-emotion";

import * as styles from "../styles";

interface ICalloutProps {
  title: string;
  children: JSX.Element;
}

const CalloutContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${styles.biggerGap} ${styles.standardGap};
`;

const Title = styled("div")`
  font-size: 20px;
  padding: ${styles.smallGap} ${styles.biggerGap} ${styles.smallGap} 0;
  border-right: 1px solid ${styles.neutralLightColor};
`;

const Description = styled("div")`
  font-size: 14px;
  padding-left: ${styles.biggerGap};

  a {
    font-weight: bold;
    color: ${styles.textColor};
    text-decoration: none;
    :hover {
      opacity: 0.9;
    }
  }
`;

const Callout: React.SFC<ICalloutProps> = props => {
  return (
    <CalloutContainer>
      <Title>{props.title}</Title>
      <Description>{props.children}</Description>
    </CalloutContainer>
  );
};

export default Callout;

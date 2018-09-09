import styled from "react-emotion";

import * as styles from "../styles";
import Button from "./Button";

const SmallButton = styled(Button)`
  padding: ${styles.sideGap};
  background-color: ${styles.neutralLighterColor};
  color: ${styles.textColor};
  font-size: 14px;
  border: none;
  margin: ${styles.sideGap};
  :hover {
    background-color: ${styles.neutralLightColor};
  }
`;

export default SmallButton;

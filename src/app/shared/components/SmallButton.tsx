import styled from "react-emotion";

import * as styles from "../styles";
import Button from "./Button";

const SmallButton = styled(Button)`
  padding: ${styles.smallGap};
  background: ${styles.neutralLighterColor};
  color: ${styles.textColor};
  font-size: 14px;
  border: 1px solid ${styles.neutralLighterColor};
`;

export default SmallButton;

import styled from "react-emotion";

import * as styles from "../styles";

const TextButton = styled("button")`
  background: none;
  color: ${styles.neutralColor};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  :hover {
    color: ${styles.textColor};
  }
`;

export default TextButton;

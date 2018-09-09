import styled from "react-emotion";

import * as styles from "../styles";

const Title = styled("h1")`
  line-height: 1.25em;
  font-size: 1.8em;
  font-weight: 100;
  margin: 0 0 ${styles.bigGap};
  color: ${styles.textColor};
`;

export default Title;

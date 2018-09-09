import styled from "react-emotion";

import * as styles from "../styles";

const Container = styled("div")`
  margin: 0 auto;
  padding: 30px 15px;
  max-width: 900px;
  overflow-x: hidden;
  min-width: 280px;
  line-height: 1.5em;
  font-family: ${styles.fontFamilyPrimary};
  font-weight: 300;
  color: ${styles.textColor};
`;

export default Container;

import styled from "react-emotion";

import * as styles from "../styles";

export const Container = styled("div")`
  margin: 0 auto;
  padding: 30px;
  max-width: 900px;
  min-width: 300px;
  line-height: 1.5em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  color: ${styles.textColor};
`;

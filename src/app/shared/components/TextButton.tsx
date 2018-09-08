import styled from 'react-emotion';

import * as styles from '../styles';

export const TextButton = styled('button')`
  background: none;
  color: ${styles.neutralPrimaryColor};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  :hover {
    color: ${styles.textColor};
  }
`;
import * as React from "react";
import styled, { css } from "react-emotion";

import { Box, Flex } from "reflexbox";
import * as constants from "../../../api/constants";
import Button from "../../shared/components/Button";
import * as styles from "../../shared/styles";

interface IPurchaseOptionsProps {
  purchasingChannelCode: string;
}

const purchaseOptionsClassname = css`
  margin-bottom: ${styles.biggestGap};
`;

const HelperText = styled("div")`
  display: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;

  @media (min-width: ${styles.mdBreakpoint}) {
    display: block;
  }
`;

export const TESTID_AVAILABLE_IN_STORE: string = "TESTID_AVAILABLE_IN_STORE";
export const TESTID_AVAILABLE_ONLINE: string = "TESTID_AVAILABLE_ONLINE";

const PurchaseOptions: React.SFC<IPurchaseOptionsProps> = props => {
  const isAvailableInStore: boolean =
    props.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_AND_STORE ||
    props.purchasingChannelCode === constants.PURCHASE_CODE_STORE_ONLY;
  const isAvailableOnline: boolean =
    props.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_AND_STORE ||
    props.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_ONLY;

  return (
    <Flex className={purchaseOptionsClassname}>
      {isAvailableInStore && (
        <Box w={[1 / 2]} m={styles.standardGap}>
          <Button
            data-testid={TESTID_AVAILABLE_IN_STORE}
            background={styles.darkColorGradiant}
          >
            Pick up in store
          </Button>
          <HelperText>find in a store</HelperText>
        </Box>
      )}
      {isAvailableOnline && (
        <Box w={[1 / 2]} m={styles.standardGap}>
          <Button data-testid={TESTID_AVAILABLE_ONLINE}>Add to cart</Button>
        </Box>
      )}
    </Flex>
  );
};

export default PurchaseOptions;

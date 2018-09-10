import * as React from "react";

import { Box, Flex } from "reflexbox";
import * as constants from "../../../api/constants";
import Button from "../../shared/components/Button";
import * as styles from "../../shared/styles";

interface IPurchaseOptionsProps {
  purchasingChannelCode: string;
}

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
    <Flex>
      {isAvailableInStore && (
        <Box w={[1 / 2]} m={styles.standardGap}>
          <Button
            data-testid={TESTID_AVAILABLE_IN_STORE}
            background={styles.darkColorGradiant}
          >
            Pick up in store
          </Button>
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

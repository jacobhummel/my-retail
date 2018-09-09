import * as React from "react";
import { connect } from "react-redux";
import { Box, Flex } from "reflexbox";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import * as constants from "../../../api/constants";
import {
  ICatalogEntryView,
  IImageLocation,
  IReturnPolicyDetail
} from "../../../api/interfaces/catalog";
import { IRootState } from "../../store";
import { fetchCatalog } from "../actions";
import { ICatalogEntryMap } from "../reducers";

import Button from "../../shared/components/Button";
import Callout from "../../shared/components/Callout";
import Container from "../../shared/components/Container";
import ImageCarousel from "../../shared/components/ImageCarousel";
import QuantityPicker from "../../shared/components/QuantityPicker";
import SmallButton from "../../shared/components/SmallButton";
import * as styles from "../../shared/styles";

import FeatureList from "../components/FeatureList";
import ItemReviews from "../components/ItemReviews";
import OfferList from "../components/OfferList";
import PromoList from "../components/PromoList";

export interface IItemViewProps {
  id: string;
  itemsById: ICatalogEntryMap;
  fetchCatalog: () => void;
}

export interface IItemViewState {
  quantity: number;
}

class ItemView extends React.Component<IItemViewProps, IItemViewState> {
  constructor(props: IItemViewProps) {
    super(props);

    this.state = {
      quantity: 0
    };

    this.setQuantity = this.setQuantity.bind(this);
  }

  public componentDidMount() {
    this.props.fetchCatalog();
  }

  public render() {
    const item: ICatalogEntryView = this.props.itemsById[this.props.id];

    if (item === undefined) {
      return <div>Loading...</div>;
    }

    // re-order images so primary image is second in carousel
    const carouselImages: IImageLocation[] = [
      item.Images[0].AlternateImages[0],
      ...item.Images[0].PrimaryImage,
      ...item.Images[0].AlternateImages.slice(1)
    ];

    const isAvailableInStore: boolean =
      item.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_AND_STORE ||
      item.purchasingChannelCode === constants.PURCHASE_CODE_STORE_ONLY;
    const isAvailableOnline: boolean =
      item.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_AND_STORE ||
      item.purchasingChannelCode === constants.PURCHASE_CODE_ONLINE_ONLY;

    const policy: IReturnPolicyDetail = item.ReturnPolicy[0].ReturnPolicyDetails.filter(
      (policyDetail: IReturnPolicyDetail) =>
        policyDetail.user === constants.GUEST_BEST // TODO: don't assume the guest is the best
    )[0];

    return (
      <Container>
        <Flex wrap={true} p={styles.standardGap}>
          <Box w={[1, 1, 1 / 2]}>
            <ImageCarousel
              title={item.title}
              images={carouselImages}
              defaultSelectedImage={1}
            />
          </Box>
          <Box w={[1, 1, 1 / 2]}>
            <OfferList offers={item.Offers} />
            <PromoList promos={item.Promotions} />
            <Flex>
              <Box w={[1, 1 / 2]} m={styles.standardGap}>
                <QuantityPicker onChanged={this.setQuantity} />
              </Box>
            </Flex>
            <Flex>
              {isAvailableInStore && (
                <Box w={[1 / 2]} m={styles.standardGap}>
                  <Button background={styles.darkColorGradiant}>
                    Pick up in store
                  </Button>
                </Box>
              )}
              {isAvailableOnline && (
                <Box w={[1 / 2]} m={styles.standardGap}>
                  <Button>Add to cart</Button>
                </Box>
              )}
            </Flex>
            <Callout title="returns">
              <span>
                This item must be returned within {policy.policyDays} days of
                the ship date. See <a href="/returns">return policy</a> for
                details. Prices, promotions, styles, and availability may vary
                by store and online.
              </span>
            </Callout>
            <Flex>
              <Box w={[1 / 3]} m={styles.standardGap}>
                <SmallButton>Add to Registry</SmallButton>
              </Box>
              <Box w={[1 / 3]} m={styles.standardGap}>
                <SmallButton>Add to List</SmallButton>
              </Box>
              <Box w={[1 / 3]} m={styles.standardGap}>
                <SmallButton>Share</SmallButton>
              </Box>
            </Flex>
            {item.ItemDescription[0] && (
              <FeatureList
                title="Product Highlights"
                featuresHtml={item.ItemDescription[0].features}
              />
            )}
          </Box>
        </Flex>
        <Flex>
          <Box w={[1, 1, 1 / 2]}>
            {item.ItemDescription[0] && (
              <ItemReviews reviews={item.CustomerReview[0]} />
            )}
          </Box>
        </Flex>
      </Container>
    );
  }

  private setQuantity(value: number) {
    this.setState({
      quantity: value
    });
  }
}

export function mapStateToProps({ catalog }: IRootState) {
  return {
    itemsById: catalog.itemsById
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IRootState, void, Action>
) {
  return {
    fetchCatalog: () => dispatch(fetchCatalog())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView);

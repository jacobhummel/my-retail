import * as React from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  ICatalogEntryView,
  IImageLocation
} from "../../../api/interfaces/catalog";
import { IRootState } from "../../store";
import { fetchCatalog } from "../actions";
import { ICatalogEntryMap } from "../reducers";

import { Container } from "../../shared/components/Container";
import { ImageCarousel } from "../../shared/components/ImageCarousel";
import QuantityPicker from "../../shared/components/QuantityPicker";
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
      return <div />;
    }

    // re-order images so primary image is second in carousel
    const carouselImages: IImageLocation[] = [
      item.Images[0].AlternateImages[0],
      ...item.Images[0].PrimaryImage,
      ...item.Images[0].AlternateImages.slice(1)
    ];

    return (
      <Container>
        <ImageCarousel
          title={item.title}
          images={carouselImages}
          defaultSelectedImage={1}
        />
        <OfferList offers={item.Offers} />
        <PromoList promos={item.Promotions} />
        <QuantityPicker onChanged={this.setQuantity} />
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

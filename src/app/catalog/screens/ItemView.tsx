import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ICatalogEntryView, IImageLocation } from '../../../api/interfaces/catalog';
import { IRootState } from '../../store';
import { fetchCatalog } from '../actions';
import { ICatalogEntryMap } from '../reducers';

import { ImageCarousel } from '../../shared/components/ImageCarousel';

export interface IItemViewProps {
  id: string;
  itemsById: ICatalogEntryMap;
  fetchCatalog: () => void;
}

export interface IItemViewState {
  description?: string;
}

class ItemView extends React.Component<IItemViewProps, IItemViewState> {
  constructor(props: IItemViewProps) {
    super(props);

    this.state = {

    }
  }

  public componentDidMount() {
    this.props.fetchCatalog();
  }

  public render() {
    const item: ICatalogEntryView = this.props.itemsById[this.props.id];

    if (item === undefined) {
      return <div />
    }

    // re-order images so primary image is second in carousel
    const carouselImages: IImageLocation[] = [
      item.Images[0].AlternateImages[0],
      ...item.Images[0].PrimaryImage,
      ...item.Images[0].AlternateImages.slice(1)
    ];

    return (
      <div>
        <ImageCarousel
          title={item.title}
          images={carouselImages}
          defaultSelectedImage={1}
        />
      </div>
    );
  }
}

export function mapStateToProps({ catalog }: IRootState) {
  return {
    itemsById: catalog.itemsById,
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<IRootState, void, Action>) {
  return {
    fetchCatalog: () => dispatch(fetchCatalog()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);

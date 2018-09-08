import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ICatalogEntryView } from '../../../api/interfaces/catalog';
import { IRootState } from '../../store';
import { fetchCatalog } from '../actions';
import { ICatalogEntryMap } from '../reducers';

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

    return (
      <div>
        {this.props.id}
        {JSON.stringify(item)}
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

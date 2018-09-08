import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { IRootState } from '../../store';
import { fetchCatalog } from '../actions';
import { ICatalogState } from '../reducers';

export interface IItemViewProps {
  id: string;
  catalog: ICatalogState;
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
    return (
      <div>
        {this.props.id}
      </div>
    );
  }
}

export function mapStateToProps({ catalog }: IRootState) {
  return {
    catalog,
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<IRootState, void, Action>) {
  return {
    fetchCatalog: () => dispatch(fetchCatalog()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);

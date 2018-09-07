import * as React from 'react';

export interface IItemViewProps {
  id: string;
}

export interface IItemViewState {
  description?: string;
}

export default class ItemView extends React.Component<IItemViewProps, IItemViewState> {
  constructor(props: IItemViewProps) {
    super(props);

    this.state = {

    }
  }

  // public componentDidMount() {
    
  // }

  public render() {
    return (
      <div>
        {this.props.id}
      </div>
    );
  }
}

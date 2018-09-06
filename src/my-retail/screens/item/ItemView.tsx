import * as React from 'react';

export interface IItemViewProps {
}

export interface IItemViewState {
}

export default class ItemView extends React.Component<IItemViewProps, IItemViewState> {
  constructor(props: IItemViewProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Testing
      </div>
    );
  }
}

import React from "react";

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

export default class FCCounter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleIncrement = () => {
    this.props.onIncrement();
  };

  render() {
    const { label, count } = this.props;

    return (
      <div>
        <span>
          {label}:{count}
        </span>
        <button type="button" onClick={this.handleIncrement}>
          {`Increment`}
        </button>
      </div>
    );
  }
}

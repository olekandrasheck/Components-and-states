import React from "react";

export interface IToolbar {
  filters: string[];
  filtered: string;
  onSelectFilter: (button: string) => void;
}

export class Toolbar extends React.Component<IToolbar> {
  constructor(props: IToolbar) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-btn">
        {this.props.filters?.map((item: string) => (
          <button
            className={`btn ${this.props.filtered === item && "selected"}`}
            onClick={() => this.props.onSelectFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

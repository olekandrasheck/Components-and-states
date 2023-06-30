import { IProjectList } from "../../types";

import { nanoid } from "nanoid";
import React from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";

export interface IPortfolioProps {
  projects: IProjectList[];
  filters: string[];
}
export interface IState {
  filtered: string;
  filteredProducts: IProjectList[];
}

export class Portfolio extends React.Component<IPortfolioProps, IState> {
  constructor(props: IPortfolioProps) {
    super(props);
    this.state = { filtered: "All", filteredProducts: this.props.projects };
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }
  filters = ["All", "Websites", "Flayers", "Business Cards"];
  onSelectFilter = (filter: string) => {
    const arr =
      filter === "All"
        ? this.props.projects
        : this.props.projects?.filter((project) => project.category === filter);
    console.log(filter, arr);
    this.setState({ filtered: filter, filteredProducts: arr });
  };

  render() {
    return (
      <div>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          filtered={this.state.filtered}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList filteredProducts={this.state.filteredProducts} />
      </div>
    );
  }
}

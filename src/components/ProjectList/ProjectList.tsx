import React from "react";
import { IProjectList } from "../../types";
import { nanoid } from "nanoid";
interface ProjectListComponent {
  filteredProducts: IProjectList[];
}

export class ProjectList extends React.Component<ProjectListComponent> {
  constructor(props: ProjectListComponent) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.filteredProducts?.map((item: IProjectList) => (
          <li className="list-word-wrapper" key={nanoid()}>
            <img className="list-word-img" src={item.img} alt={item.category} />
          </li>
        ))}
      </div>
    );
  }
}

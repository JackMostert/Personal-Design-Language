import * as React from "react";
import { IHeaderProps } from "../Header/HeaderTypes";
import Header from "../Header";

export class SectionHeader extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div className="section-header">
        <Header {...this.props} />
      </div>
    );
  }
}

import * as React from "react";
import { IGridColumnProps } from "./Interface";

export class GridColumn extends React.Component<IGridColumnProps> {
  public render() {
    return <div className="GridColumn-root">{this.props.children}</div>;
  }
}

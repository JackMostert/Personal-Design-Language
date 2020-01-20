import * as React from "react";
import { IPageGroupProps } from "./interface";

export class PageGroup extends React.Component<IPageGroupProps> {
  public render() {
    const { outlined, padding } = this.props;
    return (
      <section style={{ margin: padding ? padding : "0px 0px 100px 0px" }}>
        {this.props.children}
      </section>
    );
  }
}

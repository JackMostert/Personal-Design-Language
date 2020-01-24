import * as React from "react";
import { IHeaderProps } from "./interface";
import "./Style.scss";

export class Header extends React.Component<IHeaderProps> {
  public render() {
    return React.createElement(
      `h${this.props.hNumber}`,
      {
        className: `Header-root Header-size-${this.props.hNumber}`,
        style: { justifyContent: this.props.alignment }
      },
      this.props.children
    );
  }
}

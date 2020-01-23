import * as React from "react";
import { ILinkProps } from "./interface";
import "./Style.scss";

export class Link extends React.Component<ILinkProps> {
  public render() {
    return (
      <a
        href={this.props.href}
        onClick={this.props.onClick}
        className="Link-root"
      >
        {this.props.text || this.props.children}
      </a>
    );
  }
}

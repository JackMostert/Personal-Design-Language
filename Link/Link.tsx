import * as React from "react";
import { ILinkProps } from "./interface";
import "./Style.scss";
import Icon from "../Icon/index";

export class Link extends React.Component<ILinkProps> {
  public render() {
    return (
      <a
        href={this.props.href}
        onClick={this.props.onClick}
        className={`Link-root ${
          !this.props.inlineLine ? "Link-root-default" : "Link-root-inline"
        }`}
      >
        <Icon {...this.props.iconProps} />
        <span className="link-text">
          {this.props.text || this.props.children}
        </span>
      </a>
    );
  }
}

import * as React from "react";
import { ILinkProps } from "./LinkTypes";
import "./Link.scss";

export class Link extends React.Component<ILinkProps> {
  public render() {
    const {
      url,
      onClick,
      text,
      children,
      inline,
      style,
      className,
      invert
    } = this.props;
    return (
      <a
        className={`link ${className || ""} ${inline &&
          "link--inline"} ${invert && "link--invert"}`}
        onClick={() => onClick && onClick(url || "")}
        href={!onClick ? url : undefined}
        style={style}
      >
        {text || children}
      </a>
    );
  }
}

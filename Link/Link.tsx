import * as React from "react";
import { ILinkProps } from "./LinkTypes";
import "./Link.scss";

export class Link extends React.Component<ILinkProps> {
  public render() {
    const { url, onClick, text } = this.props;
    return (
      <a
        className="Link-root"
        onClick={() => onClick && onClick(url || "")}
        href={!onClick ? url : undefined}
      >
        {text}
      </a>
    );
  }
}

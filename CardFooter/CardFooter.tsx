import * as React from "react";
import { ICardFooterProps } from "./interface";
import "./Style.scss";

export class CardFooter extends React.Component<ICardFooterProps> {
  public render() {
    return <div>{this.props.children}</div>;
  }
}

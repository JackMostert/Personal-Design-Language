import * as React from "react";
import { ITextProps } from "./interface";
import "./Style.scss";

export class Text extends React.Component<ITextProps> {
  public render() {
    const { weight } = this.props;
    return <p className={`Text-root Text-${weight}`}>{this.props.children}</p>;
  }
}

import * as React from "react";
import { ICardTitleProps } from "./interface";
import "./Style.scss";

export class CardTitle extends React.Component<ICardTitleProps> {
  public render() {
    return (
      <div className={`CardTitle-root CardTitle-size-${this.props.size}`}>
        {this.props.children}
      </div>
    );
  }
}

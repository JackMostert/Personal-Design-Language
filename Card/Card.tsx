import * as React from "react";
import { ICardProps, ICardState } from "./Interface";
import "./Style.scss";

export class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { className, style, shadowSpread } = this.props;
    return (
      <div
        className={`Card-root ${className ||
          ""} Card-shadow-v${shadowSpread} Card-size-${this.props.size}`}
        style={{ ...style }}
      >
        {this.props.children}
      </div>
    );
  }
}

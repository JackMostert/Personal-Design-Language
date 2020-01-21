import * as React from "react";
import { ICardProps, ICardState } from "./Interface";
import "./Style.scss";

export class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { className, style, shadowSpread, padding } = this.props;
    return (
      <div className={`Card-root ${className || ""}`} style={{ ...style }}>
        <div className={`shadow-v${shadowSpread}`} style={{ padding: padding }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

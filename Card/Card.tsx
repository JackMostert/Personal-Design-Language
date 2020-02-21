import * as React from "react";
import { ICardProps, ICardState } from "./CardTypes";

export class Card extends React.Component<ICardProps, ICardState> {
  public render() {
    return <div className="Card-root"></div>;
  }
}

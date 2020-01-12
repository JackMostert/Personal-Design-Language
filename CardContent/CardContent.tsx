import * as React from "react";
import { ICardContentProps, ICardContentState } from "./Interface";

export class CardContent extends React.Component<
  ICardContentProps,
  ICardContentState
> {
  constructor(props: ICardContentProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="CardContent-root">{this.props.children}</div>;
  }
}

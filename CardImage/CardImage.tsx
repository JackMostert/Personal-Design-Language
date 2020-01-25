import * as React from "react";
import { ICardImageProps, ICardImageState } from "./Interface";
import "./Style.scss";

export class CardImage extends React.Component<
  ICardImageProps,
  ICardImageState
> {
  constructor(props: ICardImageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="CardImage-root">
        {this.props.children && (
          <div className="overlay">{this.props.children}</div>
        )}
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    );
  }
}

import * as React from "react";
import { ICardImageProps, ICardImageState } from "./Interface";
import './Style.scss';

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
        <div className="overlay">{this.props.children}</div>
        <img
          alt={this.props.alt}
          className={this.props.size}
          src={this.props.src}
        />
      </div>
    );
  }
}

import * as React from "react";
import { IImageCardProps, IImageCardState } from "./ImageCardTypes";
import "./ImageCard.scss";
import Header from "../Header";

export class ImageCard extends React.Component<
  IImageCardProps,
  IImageCardState
> {
  public render() {
    return (
      <div className="ImageCard-root ImageCard-root--shadow-light">
        <div className="ImageCard-root__container">
          <img className="ImageCard-root__image" src={this.props.src} />
          <span className="ImageCard-root__title">{this.props.title}</span>
        </div>
        <div className="ImageCard-root__content body-text">{this.props.content}</div>
      </div>
    );
  }
}

import * as React from "react";
import { ITextProps } from "./TextTypes";
import "./Text.scss";

export class Text extends React.Component<ITextProps> {
  public render() {
    const { weight, size, truncate, className } = this.props;
    const weightStyle = weight ? `Body-text--weight-${weight}` : "";
    const sizeStyle = size ? `Body-text--size-${size}` : "";
    const truncateStyle = truncate ? `Body-text--truncate` : "";
    const classNameStyle = className ? className : "";
    return (
      <p
        className={`Body-text ${weightStyle} ${sizeStyle} ${truncateStyle} ${classNameStyle}`}
      >
        {this.props.children}
      </p>
    );
  }
}

import * as React from "react";
import { ITextProps } from "./TextTypes";
import "./Text.scss";

export class Text extends React.Component<ITextProps> {
  public render() {
    const { weight, size, truncate, className, style } = this.props;
    const weightStyle = weight ? `body-text--weight-${weight}` : "";
    const sizeStyle = size ? `body-text--size-${size}` : "";
    const truncateStyle = truncate ? `body-text--truncate` : "";
    const classNameStyle = className ? className : "";
    return (
      <p
        style={style}
        className={`body-text ${weightStyle} ${sizeStyle} ${truncateStyle} ${classNameStyle}`}
      >
        {this.props.children}
      </p>
    );
  }
}

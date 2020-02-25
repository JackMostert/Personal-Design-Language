import * as React from "react";
import { ICaptionProps } from "./CaptionTypes";

export class Caption extends React.Component<ICaptionProps> {
  public render() {
    const { text, children, className, style, fontStyle } = this.props;
    const baseClass = `caption ${className || ""} ${(fontStyle &&
      "caption--" + fontStyle) ||
      ""}`;
    return (
      <i className={baseClass} style={style}>
        {text || children}
      </i>
    );
  }
}

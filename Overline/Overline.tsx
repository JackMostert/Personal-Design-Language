import * as React from "react";
import { IOverlineProps } from "./OverlineTypes";

export class Overline extends React.Component<IOverlineProps> {
  public render() {
    const { text, children, className, style, fontStyle } = this.props;
    const baseClass = `overline ${className || ""} ${(fontStyle &&
      "overline--" + fontStyle) ||
      ""}`;
    return (
      <p className={baseClass} style={style}>
        {text || children}
      </p>
    );
  }
}

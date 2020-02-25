import * as React from "react";
import { ITextProps } from "./TextTypes";

export class Text extends React.Component<ITextProps> {
  public render() {
    const { className, style, fontStyle, modifySize } = this.props;

    let baseClass = `text-block ${className || ""} ${(fontStyle &&
      "text-block--" + fontStyle) ||
      ""}`;

    return (
      <p style={style} className={baseClass} font-size={modifySize}>
        {this.props.children}
      </p>
    );
  }
}

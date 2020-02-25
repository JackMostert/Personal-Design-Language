import * as React from "react";
import { ITextBlockProps } from "./TextBlockTypes";

export class TextBlock extends React.Component<ITextBlockProps> {
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

import * as React from "react";
import { IIconProps } from "./interface";
import "./Style.scss";

export class Icon extends React.Component<IIconProps> {
  public render() {
    const { icon, style, fontSize } = this.props;

    return (
      <i
        className={`${icon} Icon-root`}
        style={{ ...style, fontSize: fontSize }}
      ></i>
    );
  }
}

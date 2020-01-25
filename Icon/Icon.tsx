import * as React from "react";
import { IIconProps } from "./interface";
import "./Style.scss";
import { Text } from "../Text/Text";

export class Icon extends React.Component<IIconProps> {
  public render() {
    const { icon, style, fontSize, text } = this.props;

    if (text)
      return (
        <div className="Icon-root-text">
          <i
            className={`${icon} Icon-root`}
            style={{ ...style, fontSize: fontSize }}
          ></i>
          <Text weight="light">{text}</Text>
        </div>
      );

    return (
      <i
        className={`${icon} Icon-root`}
        style={{ ...style, fontSize: fontSize }}
      ></i>
    );
  }
}

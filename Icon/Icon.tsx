import * as React from "react";
import { IIconProps } from "./interface";
import { iconImport } from "../Healpers/healper";

export class Icon extends React.Component<IIconProps> {
  public render() {
    const { icon, onIconRender, width, height } = this.props;
    const style = { width: width, height: height };

    if (onIconRender) return onIconRender;
    return <img style={style} src={iconImport.back} />;
  }
}

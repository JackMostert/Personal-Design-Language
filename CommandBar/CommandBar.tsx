import * as React from "react";
import { ICommandBarProps, ICommandBarState } from "./CommandBarTypes";
import "./CommandBar.scss";

export class CommandBar extends React.Component<
  ICommandBarProps,
  ICommandBarState
> {
  public render() {
    const { style, className } = this.props;
    return (
      <div className={`commandbar-root ${className || ""}`} style={style}>
        <div className="commandbar-root__near">{this.props.CommandBarNear}</div>
        <div className="commandbar-root__far">{this.props.CommandBarFar}</div>
      </div>
    );
  }
}

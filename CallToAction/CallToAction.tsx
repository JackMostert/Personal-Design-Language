import * as React from "react";
import { ICallToActionProps } from "./Interface";
import "./Style.scss";

export class CallToAction extends React.Component<ICallToActionProps> {
  public render() {
    return (
      <button onClick={this.props.onClick} className="CallToAction-root">
        {this.props.text || this.props.children}
      </button>
    );
  }
}

import * as React from "react";
import { IPersonaProps } from "./interface";
import { Text } from "../Text/Text";
import "./Style.scss";

export class Persona extends React.Component<IPersonaProps> {
  public render() {
    return (
      <div className="Persona-root">
        <img
          src={this.props.src}
          width={this.props.size}
          height={this.props.size}
        />
        <div className="Persona-content">
          <Text weight="regular">{this.props.text}</Text>
        </div>
      </div>
    );
  }
}

import * as React from "react";
import { ITextInputProps, ITextInputState } from "./Interface";
import "./Style.scss";

export class TextInput extends React.Component<
  ITextInputProps,
  ITextInputState
> {
  constructor(props: ITextInputProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { type, labelValue, onLabelRender, length, size } = this.props;
    return (
      <div className="TextInput-root">
        <label className={`${length} ${size}`}>
          {onLabelRender ? onLabelRender : labelValue}
          <input type={type} />
        </label>
      </div>
    );
  }
}

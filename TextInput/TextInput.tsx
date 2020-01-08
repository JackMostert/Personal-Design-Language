import * as React from "react";
import { ITextInputProps, ITextInputState } from "./Interface";
import "./Style.scss";

export class TextInput extends React.Component<
  ITextInputProps,
  ITextInputState
> {
  constructor(props: ITextInputProps) {
    super(props);

    let isActive = !!this.props.value;

    this.state = {
      isActive: isActive,
      mode: "standard"
    };
  }

  private changeActiveState = (value: boolean) => {
    this.setState({ isActive: value });
  };

  public render() {
    const { isActive, mode } = this.state;
    const { type, labelValue, onLabelRender, value } = this.props;
    return (
      <div className="TextInput-root">
        <label className="label-container">
          <span
            className={`label-text ${
              isActive ? "label-text-active" : "label-text-inactive"
            }`}
          >
            {onLabelRender ? onLabelRender : labelValue}
          </span>
          <input
            onFocus={() => this.changeActiveState(true)}
            onBlur={() => this.changeActiveState(false)}
            className={`input ${mode}-outline`}
            type={type}
            value={value}
          />
        </label>
      </div>
    );
  }
}

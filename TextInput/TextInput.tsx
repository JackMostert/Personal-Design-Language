import * as React from "react";
import { ITextInputProps, ITextInputState } from "./Interface";
import "./Style.scss";

export class TextInput extends React.Component<
  ITextInputProps,
  ITextInputState
> {
  constructor(props: ITextInputProps) {
    super(props);

    /**
     * Sets the inital position of the label
     */
    let isActive = !!this.props.value;

    this.state = {
      isActive: isActive,
      mode: "standard",
      internalValue: this.props.value || ""
    };
  }

  /**
   * Changes the active state which controls what position to put the label
   */
  private changeActiveState = (value: boolean) => {
    if (!!this.state.internalValue) return;
    this.setState({ isActive: value });
  };

  /**
   * Pass <input> value to onChange
   * Update internal <input> value tracker
   */
  private valueChanged = (value: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = value.target.value;
    if (this.props.onChange) this.props.onChange(targetValue);
    this.setState({ internalValue: targetValue });
  };

  public render() {
    const { isActive, mode } = this.state;
    const { type, labelValue, onLabelRender, value } = this.props;

    const labelStyle = isActive ? "label-text-active" : "label-text-inactive";
    const labelText = onLabelRender ? onLabelRender : labelValue;

    return (
      <div className="TextInput-root">
        <label className="label-container">
          <span className={`label-text ${labelStyle}`}>{labelText}</span>
          <input
            onChange={value => this.valueChanged(value)}
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

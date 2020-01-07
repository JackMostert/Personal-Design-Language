import * as React from "react";
import { ITextInputProps, ITextInputState } from "./Interface";

export class TextInput extends React.Component<
  ITextInputProps,
  ITextInputState
> {
  constructor(props: ITextInputProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="TextInput-root">text</div>;
  }
}

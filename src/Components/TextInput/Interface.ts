export interface ITextInputProps {
  /**
   * Specifies the initial value for an input field
   * If supplied will turn component into controled state
   */
  value?: string;

  /**
   *	Specifies that the input field is read only
   *	Note: cannot be changed
   */
  readonly?: boolean;

  /**
   *	Specifies that the input field is disabled
   *	Note: A disabled input field is unusable and un-clickable, and its value will not be sent when submitting the form
   */
  disabled?: boolean;

  /**
   *	Specifies the size of the input field
   */
  size?: "small" | "normalSize" | "large";

  /**
   *	Specifies the length of the input field
   */
  length?: "auto" | "short" | "long" | "fill" | "normalLength";

  /**
   *	Specifies the maximum allowed length for the input field
   */
  maxLength?: number;

  /**
   *	Specifies the minimum allowed length for the input field
   */
  minLength?: number;

  /**
   *	Specifies if the browser should fill in with previously stored value
   */
  autoComplete?: boolean;

  /**
   *	Specifies that the input field should automatically get focus when the page loads
   */
  autoFocus?: boolean;

  /**
   *	specifies one or more forms the <input> element belongs to
   */
  form?: string;

  /**
   *	specifies a hint that describes the expected value of an input field
   */
  placeholder?: string;

  /**
   *	specifies that an input field must be filled out before submitting the form
   */
  required?: boolean;

  /**
   *	specifies the type of text input
   */
  type: "text" | "password" | "email" | "hidden" | "url";

  /**
   * Specifies the label text
   */
  labelValue?: string;

  /**
   * Render a custom label
   * Note: will override labelValue
   */
  onLabelRender?: any;
}

export interface ITextInputState {}

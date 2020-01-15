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
   *	specifies the inital value for the component
   */
  defaultValue?: string;

  /**
   *	specifies the type of text input
   */
  type: "text" | "password" | "email" | "hidden" | "url";

  /**
   * specifies the size of text input
   * 1 being the smallest and 5 being the largest
   */
  size: 1 | 2 | 3 | 4 | 5;

  /**
   * specifies the borderRadius of text input
   * 1 being the smallest and 5 being the largest
   */
  borderRadius?: 1 | 2 | 3 | 4 | 5;

  /**
   * Specifies the label text
   */
  labelValue?: string;

  /**
   * Render a custom label
   * Note: will override labelValue
   */
  onLabelRender?: any;

  /**
   * Provide an error message
   * Note: Will change color of <input>
   */
  error?: string;

  /**
   * Provide an warning message
   * Note: Will change color of <input>
   */
  warning?: string;

  /**
   * Expose the onChange API
   */
  onChange?: (value: string) => void;

  /**
   *	Add your own css class
   */
  className?: string;

  /**
   *	Add your own css inline styles
   */
  style?: React.CSSProperties;
}

export interface ITextInputState {
  /**
   * refures to the state in which the label will either be up or down
   */
  isActive: boolean;
  mode: "standard" | "error" | "warning";
  /**
   * <input> value is tracked internally
   */
  internalValue: string;
}

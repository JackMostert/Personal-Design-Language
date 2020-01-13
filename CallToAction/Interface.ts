export interface ICallToActionProps {
  /**
   * TODO!!!!
   */
  outlined?: boolean;

  /**
   * Callback when the user clicks on the button
   */
  onClick?: () => void;

  /**
   * The value to display on the button itself
   * Note: You can ignore this if your passing the value though Children
   */
  text?: string;
}

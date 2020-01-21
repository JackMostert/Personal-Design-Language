export interface ICardProps {
  /**
   *	Determins the range the shadow travels
   *	Note: values range from 1 to 5
   */
  shadowSpread?: number;

  /**
   *	Add your own css class
   */
  className?: string;

  /**
   *	Add your own css inline styles
   */
  style?: any;

  padding?: string;
}

export interface ICardState {}

export interface ILoadingProps {
  animationConfig: IAnimationProps;
  type: { spinner?: ISpinnerProps };
  fadout?: boolean;
}

export interface ISpinnerProps {
  size: string;
  baseColor?: string;
  accentColor?: string;
}

export interface IAnimationProps {
  delay: number;
  animationLength: number;
}

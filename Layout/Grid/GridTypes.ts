export interface IGridProps {
  mediaSizes: Array<IMediaSize>;
  items: Array<JSX.Element>;
  columnGap?: string | number;
  rowGap?: string | number;
  style?: React.CSSProperties;
}

export interface IMediaSize {
  size: number;
  columns: number;
}

export interface IGridState {}

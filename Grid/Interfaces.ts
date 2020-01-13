export interface IGridProps {
  row: number;
  col: number;
  gap?: string;
  rowGap?: string;
  colGap?: string;
  margin?: string;
}

export interface IGridState {
  row: string;
  col: string;
  gap?: string;
  rowGap?: string;
  colGap?: string;
}

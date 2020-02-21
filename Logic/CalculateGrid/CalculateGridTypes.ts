export interface ICalculateGridProps {
  items: Array<any>;
  columns: number;
  children: (gridItems: any[][]) => React.ReactNode;
}

export interface ICalculateGridState {
  gridItems: any[][];
}

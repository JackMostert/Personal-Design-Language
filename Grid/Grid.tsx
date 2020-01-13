import * as React from "react";
import { IGridProps, IGridState } from "./Interfaces";
import "./Style.scss";

export class Grid extends React.Component<IGridProps, IGridState> {
  constructor(props: IGridProps) {
    super(props);

    this.state = {
      row: `repeat(${this.props.row}, 1fr)`,
      col: `repeat(${this.props.col}, 1fr)`,
      gap: `${this.props.gap}`,
      rowGap: `${this.props.rowGap}`,
      colGap: `${this.props.colGap}`
    };
  }
  public render() {
    const { row, col, gap, rowGap, colGap } = this.state;
    return (
      <div
        className="Grid-root"
        style={{
          gridTemplateColumns: col,
          gridTemplateRows: row,
          rowGap: rowGap,
          columnGap: colGap,
          gap: gap,
          margin: this.props.margin
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

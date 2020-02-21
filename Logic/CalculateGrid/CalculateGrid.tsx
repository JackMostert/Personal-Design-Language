import * as React from "react";
import { ICalculateGridProps, ICalculateGridState } from "./CalculateGridTypes";

export class CalculateGrid extends React.Component<
  ICalculateGridProps,
  ICalculateGridState
> {
  private generateArray(x: number, y?: number): any[] | any[][] {
    let generatedArray = new Array(x);

    if (y === undefined) return generatedArray;

    for (let i = 0; i < generatedArray.length; i++) {
      generatedArray[i] = new Array(y);
    }

    return generatedArray;
  }

  private calulate = () => {
    const { items, columns } = this.props;

    let gridItems: any[][] = this.generateArray(columns, 0);

    for (let i = 0; i < items.length; i++) {
      const cal = ((i % columns) + columns) % columns;
      gridItems[cal].push(items[i]);
    }

    return gridItems;
  };

  state = {
    gridItems: this.calulate()
  };

  componentDidUpdate(prevProps: ICalculateGridProps) {
    if (prevProps.columns !== this.props.columns) {
      this.setState({
        gridItems: this.calulate()
      });
    }
  }

  public render() {
    return this.props.children(this.state.gridItems);
  }
}

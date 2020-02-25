import * as React from "react";
import { SizeMe } from "react-sizeme";
import { IGridProps, IGridState } from "./GridTypes";
import CalculateGrid from "../../Logic/CalculateGrid";
import "./Grid.scss";

export class Grid extends React.Component<IGridProps, IGridState> {
  private cal = (size: number) => {
    let col = 5;
    for (let i = 0; i < this.props.mediaSizes.length; i++) {
      if (size <= this.props.mediaSizes[i].size)
        col = this.props.mediaSizes[i].columns;
    }
    return col;
  };

  public render() {
    const { items, columnGap, rowGap, style } = this.props;
    return (
      <div className="GalleryGrid-root" style={style}>
        <SizeMe monitorHeight>
          {({ size }: any) => {
            if (!size.width) return <div></div>;
            const columns = this.cal(size.width);
            return (
              // used to determin the div size
              <div className="GalleryGrid-root__controler">
                <div
                  className="GalleryGrid-root__container"
                  style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    columnGap: columnGap || 10
                  }}
                >
                  <CalculateGrid items={items} columns={columns}>
                    {(gridItems: any) =>
                      gridItems.map((gridRow: any, index: number) => (
                        <div
                          className={`grid-column grid-col-${index}`}
                          role="region"
                          aria-label={`Column ${index + 1} for showing images`}
                        >
                          {gridRow.map((gridItem: any) => (
                            <div style={{ marginBottom: rowGap || 5 }}>
                              {gridItem}
                            </div>
                          ))}
                        </div>
                      ))
                    }
                  </CalculateGrid>
                </div>
              </div>
            );
          }}
        </SizeMe>
      </div>
    );
  }
}

import * as React from "react";
import "./Style.scss";

export interface ILoadingProps {
  style: "spinner";
  size: string;
  baseColor?: string;
  accentColor?: string;
}

export function Loading(props: ILoadingProps) {
  const { style, size, baseColor, accentColor } = props;
  return (
    <div className="Loader-root">
      <div
        className={style}
        style={{
          width: size,
          height: size,
          border: `2px solid ${baseColor || "#b9b9b9"}`,
          borderTop: `4px solid ${accentColor || "#4c8bff"}`
        }}
      ></div>
    </div>
  );
}

import * as React from "react";

export interface ISpacingProps {
  spacing: "left" | "right" | "evenly" | "between" | "around" | "center";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Spacing(props: ISpacingProps) {
  return (
    <div style={props.style} className={`helper--spacing-${props.spacing}`}>
      {props.children}
    </div>
  );
}

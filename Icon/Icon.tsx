import * as React from "react";

export interface IIconProps {
  icon: string;
  size?: number;
  style?: React.CSSProperties;
}

export function Icon(props: IIconProps) {
  return (
    <i
      style={{ ...props.style, fontSize: props.size }}
      className={props.icon}
    ></i>
  );
}

import * as React from "react";

export interface IIconProps {
  icon: string;
  size?: number;
  style?: React.CSSProperties;
  children?: any;
}

export function Icon(props: IIconProps) {
  return (
    <i
      style={{ ...props.style, fontSize: props.size }}
      className={`icon ${props.icon}`}
    >
      {props.children}
    </i>
  );
}

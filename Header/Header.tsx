import * as React from "react";
import { IHeaderProps } from "./HeaderTypes";

export function Header(props: IHeaderProps) {
  const {
    type,
    overrideStyle,
    value,
    children,
    className,
    style,
    modifySize
  } = props;

  let baseClass = `header ${className || ""}`;

  if (overrideStyle) baseClass += ` header--${overrideStyle}`;
  else baseClass += ` header--${type}`;

  let attributes = {
    className: baseClass,
    style: style,
    fontSize: modifySize || ""
  };

  return React.createElement(type, attributes, value || children);
}

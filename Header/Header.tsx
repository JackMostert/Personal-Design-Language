import * as React from "react";
import { IHeaderProps } from "./HeaderTypes";
import "./Header.scss";

export function Header(props: IHeaderProps) {
  // Set css style class
  const headerStyle =
    "Header-Root--style-" + (props.headerStyle || props.headerSize);

  // Create header component
  return React.createElement(
    props.headerSize,
    {
      className: headerStyle + " " + (props.className || ""),
      style: props.style
    },
    props.value || props.children
  );
}

import * as React from "react";
import { ILoadingProps } from "./interface";
import "./Style.scss";

export function Loading(props: ILoadingProps) {
  const { delay, animationLength } = props.animationConfig;
  const { spinner } = props.type;

  return (
    <div
      className={`Loader-root ${props.fadout && "spinner-fadout"}`}
      style={{
        transition: `all ease-in-out ${animationLength}s`,
        transitionDelay: `${delay}s`
      }}
    >
      <div
        className={spinner && "spinner"}
        style={{
          width: spinner.size || 50,
          height: spinner.size || 50,
          border: `2px solid ${spinner.baseColor || "#b9b9b9"}`,
          borderTop: `4px solid ${spinner.accentColor || "#4c8bff"}`
        }}
      ></div>
    </div>
  );
}

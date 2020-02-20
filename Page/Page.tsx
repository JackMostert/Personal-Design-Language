import * as React from "react";
import { IPageProps, IPageState } from "./PageTypes";

const render = (propElement: JSX.Element | string, type: string) => {
  if (propElement && typeof propElement === "string")
    return React.createElement(
      type.toLowerCase(),
      { className: `page-root__${type}` },
      propElement
    );

  return propElement;
};

export class Page extends React.Component<IPageProps, IPageState> {
  public render() {
    const {
      children,
      header,
      footer,
      style,
      className,
      scrollable
    } = this.props;
    return (
      <section className={`page-root ${className || ""}`} style={style}>
        {header && render(header, "Header")}
        <div
          className={`page-root__content ${
            scrollable ? "page-root__content--scrollable" : ""
          }`}
        >
          {children}
        </div>
        {footer && render(footer, "Footer")}
      </section>
    );
  }
}

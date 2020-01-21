import * as React from "react";
import { IPageProps, IPageState } from "./interface";
import "./Style.scss";
import NavigationBar from "../NavigationBar/Index";

export class Page extends React.Component<IPageProps, IPageState> {
  constructor(props: IPageProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {
      backgroundColor,
      backgroundImage,
      width,
      pageAlignment,
      pageColor,
      isRoot,
      navLinksNear,
      navLinksFar,
      navigationOptions,
      internalPadding
    } = this.props;
    const WHstyle = isRoot
      ? { width: "100vw", height: "100vh" }
      : { width: "100%", height: "100%" };
    return (
      <div
        className="Page-root"
        style={{
          background: backgroundColor,
          justifyContent: pageAlignment,
          ...WHstyle
        }}
      >
        <div
          className="Page-content"
          style={{
            width: width,
            background: pageColor
          }}
        >
          <div style={navLinksNear || navLinksFar ? { height: "60px" } : {}}>
            {(navLinksNear || navLinksFar) && (
              <NavigationBar
                navigationOptions={navigationOptions}
                items={navLinksNear}
                farItems={navLinksFar}
              />
            )}
          </div>
          <div style={{ padding: internalPadding, boxSizing: "border-box" }}>
            {this.props.children}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

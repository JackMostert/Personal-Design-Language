import * as React from "react";
import {
  INavigationBarProps,
  INavigationBarState,
  INavigationBarLink
} from "./Interface";
import "./Style.scss";
import Icon from "../Icon";

export class NavigationBar extends React.Component<
  INavigationBarProps,
  INavigationBarState
> {
  constructor(props: INavigationBarProps) {
    super(props);
    this.state = {};
  }

  private generateLinks = (linkArray: INavigationBarLink[]) => {
    return linkArray.map((item: INavigationBarLink) => (
      <a href={item.url} className="link">
        <Icon width={31} height={31} icon="" />
        <span className="link-text">{item.displayName}</span>
      </a>
    ));
  };

  public render() {
    const style = this.props.navigationOptions?.style;
    const stretch = this.props.navigationOptions?.stretch;

    let positioning = stretch ? { top: 0, left: 0, right: 0 } : {};

    return (
      <div
        className="NavigationBar-root"
        style={{ position: style, ...positioning }}
      >
        <div className="left">{this.generateLinks(this.props.items)}</div>
        <div className="right">
          {this.generateLinks(this.props.farItems || [])}
        </div>
      </div>
    );
  }
}

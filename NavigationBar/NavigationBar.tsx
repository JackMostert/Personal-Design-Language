import * as React from "react";
import {
  INavigationBarProps,
  INavigationBarState,
  INavigationBarLink
} from "./Interface";
import "./Style.scss";
import Icon from "../Icon";
import Header from "../Header/Index";
import Link from "../Link/Index";

export class NavigationBar extends React.Component<
  INavigationBarProps,
  INavigationBarState
> {
  constructor(props: INavigationBarProps) {
    super(props);
    this.state = {};
  }

  private generateLinks = (linkArray: INavigationBarLink[]) => {
    let headers: any[] = [];
    let items = linkArray.map((item: INavigationBarLink) =>
      !item.isHeader ? (
        <Link
          href={!this.props.onClick ? item.url : undefined}
          text={item.displayName}
          iconProps={{ fontSize: "1.3rem", icon: item.iconName }}
          onClick={() => this.props.onClick && this.props.onClick(item.url)}
        />
      ) : (
        <Header headerSize="h6">
          {item.iconName && <Icon icon={item.iconName} fontSize="1.7rem" />}
          {item.displayName}
        </Header>
      )
    );

    return headers.concat(items);
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
        <div className="left">{this.generateLinks(this.props.items || [])}</div>
        <div className="right">
          {this.generateLinks(this.props.farItems || [])}
        </div>
      </div>
    );
  }
}

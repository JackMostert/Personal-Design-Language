import * as React from "react";
import { INavigationProps } from "./NavigationTypes";
import "./Navigation.scss";
import Link from "../Link";
import { ILinkProps } from "../Link/LinkTypes";
import { Spacing } from "../Helpers/Spacing";

export class Navigation extends React.Component<INavigationProps> {
  public render() {
    return (
      <nav className="Navigation-root">
        <Spacing spacing="between">
          <div>
            <div className="Navigation-root__logo">{this.props.logo}</div>
            <div className="Navigation-root__near"></div>
          </div>
          <div className="Navigation-root__far">
            {this.props.farLinks?.map((el: ILinkProps) => (
              <Link {...el} />
            ))}
          </div>
        </Spacing>
      </nav>
    );
  }
}

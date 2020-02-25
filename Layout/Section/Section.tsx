import * as React from "react";
import { ISectionProps } from "./SectionTypes";
import { SectionHeader } from "../../Types/SectionHeader/SectionHeader";

export class Section extends React.Component<ISectionProps> {
  public render() {
    const { className, style, headerText } = this.props;
    const baseClass = `Section ${className || ""}`;
    return (
      <section className={baseClass} style={style}>
        {headerText && (
          <SectionHeader type="h4" style={{ fontWeight: "lighter" }}>
            {headerText}
          </SectionHeader>
        )}
        {this.props.children}
      </section>
    );
  }
}

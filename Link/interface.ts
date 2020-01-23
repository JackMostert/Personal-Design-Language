import { IIconProps } from "../Icon/interface";

export interface ILinkProps {
  href?: string;
  text?: string;
  iconProps?: IIconProps;
  inlineLine?: boolean;
  onClick?: () => void;
}

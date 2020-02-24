import { ILinkProps } from "../Link/LinkTypes";

export interface INavigationProps {
  farLinks?: ILinkProps[];
  nearLinks?: ILinkProps[];
  logo?: any;
  onClick?: (name: string) => void;
  style?: React.CSSProperties;
}

import { INavigationBarLink } from "../NavigationBar/Interface";

export interface IPageProps {
  backgroundColor?: string;
  backgroundImage?: any;
  width: string;
  pageAlignment: "flex-start" | "center" | "flex-end";
  pageColor?: string;
  isRoot: boolean;
  navLinksNear?: Array<INavigationBarLink>;
  navLinksFar?: Array<INavigationBarLink>;
  navigationOptions?: {
    style: "sticky" | "fixed" | "initial";
    stretch?: boolean;
  };
  internalPadding?: string;
}

export interface IPageState {}

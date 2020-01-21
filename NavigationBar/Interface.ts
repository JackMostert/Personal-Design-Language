export interface INavigationBarLink {
  url?: string;
  displayName: string;
  id?: string | number;
  iconName?: string;

  isHeader?: boolean;

  onClick?: () => void;
}

export interface INavigationBarProps {
  items?: Array<INavigationBarLink>;
  farItems?: Array<INavigationBarLink>;
  navigationOptions?: {
    style: "sticky" | "fixed" | "initial";
    stretch?: boolean;
  };
}

export interface INavigationBarState {}

export interface ILinkProps {
  url?: string;
  onClick?: (url: string) => void;
  text?: string;
  modifySize?: "smaller" | "larger";
  inline?: boolean;
  invert?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface IHeaderProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  overrideStyle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  value?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  modifySize?: "smaller" | "larger";
}

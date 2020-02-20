export interface IHeaderProps {
  headerSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerStyle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  darkMode?: boolean;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
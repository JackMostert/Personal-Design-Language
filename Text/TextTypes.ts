export interface ITextProps {
  weight?: string;
  size?: "small" | "normal" | "large" | "xlarge";
  truncate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

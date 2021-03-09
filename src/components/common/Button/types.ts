export type ButtonProps = {
  action: () => void;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  type: 'button' | 'link';
  text: string;
  position?: 'absolute' | 'relative';
  top?: string;
  left?: string;
};

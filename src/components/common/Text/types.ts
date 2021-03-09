type TextAlignment = 'right' | 'center' | 'left';

export type TextProps = {
  alignment?: TextAlignment;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  text: string;
};

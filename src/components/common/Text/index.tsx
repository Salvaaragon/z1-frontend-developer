import React from 'react';
import { CustomText } from './styles';

type TextProps = {
  alignment?: 'right' | 'center' | 'left';
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  text: string;
};

const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    alignment,
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    text,
  } = props;
  return (
    <CustomText
      align={alignment}
      color={color}
      fontfamily={fontFamily}
      fontsize={fontSize}
      fontstyle={fontStyle}
      fontweight={fontWeight}
      letterspacing={letterSpacing}
      lineheight={lineHeight}
    >
      {text}
    </CustomText>
  );
};

Text.defaultProps = {
  alignment: 'right',
  color: '#000',
  fontFamily: 'Roboto',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 'initial',
  letterSpacing: '0',
  lineHeight: '1.5rem',
};

export default Text;

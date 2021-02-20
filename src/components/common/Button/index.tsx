import Text from '@Components/common/Text';
import React from 'react';
import { CustomButton, CustomLink } from './styles';

type ButtonProps = {
  action: () => void;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  type: 'button' | 'link';
  text: string;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    action,
    backgroundColor,
    fontFamily,
    fontSize,
    fontWeight,
    textColor,
    type,
    text,
  } = props;

  return (
    <>
      {type === 'button' ? (
        <CustomButton backgroundcolor={backgroundColor} onClick={action}>
          <Text
            alignment="center"
            color={textColor}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            text={text}
          />
        </CustomButton>
      ) : (
        <CustomLink onClick={action}>
          <Text
            alignment="center"
            color={textColor}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            text={text}
          />
        </CustomLink>
      )}
    </>
  );
};

Button.defaultProps = {
  backgroundColor: 'rgba(47, 0, 121, 0.3)',
};

export default Button;

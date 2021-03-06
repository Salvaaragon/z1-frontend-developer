import Text from '@Components/common/Text';
import React from 'react';
import { CustomButton, CustomLink } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { action, backgroundColor, fontFamily, fontSize } = props;
  const { left, position, fontWeight, textColor, type, text, top } = props;

  return (
    <>
      {type === 'button' ? (
        <CustomButton
          backgroundcolor={backgroundColor}
          left={left}
          position={position}
          top={top}
          onClick={action}
        >
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
  position: 'relative',
  top: '0',
  left: '0',
};

export default React.memo(Button);

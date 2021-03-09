import Text from '@Components/common/Text';
import { Flex } from '@Components/custom/Flex';
import React from 'react';
import { CustomFAIcon } from './styled';
import { StatusIconProps } from './types';

const StatusIcon: React.FC<StatusIconProps> = (props: StatusIconProps) => {
  const { icon, iconColor, text, textColor } = props;
  const { padding, position, left, top, transform } = props;

  return (
    <Flex
      justifycontent="center"
      padding={padding}
      position={position}
      left={left}
      top={top}
      transform={transform}
    >
      <CustomFAIcon icon={icon} color={iconColor} />
      <Text color={textColor} lineHeight="1rem" text={text} />
    </Flex>
  );
};

StatusIcon.defaultProps = {
  padding: '1rem 0 0',
};

export default StatusIcon;

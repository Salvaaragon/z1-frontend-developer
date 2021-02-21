import Text from '@Components/common/Text';
import { Flex } from '@Components/custom/Flex';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { CustomFAIcon } from './styled';

export type StatusIconType = {
  icon: IconProp;
  iconColor: string;
  text: string;
  textColor: string;
  left?: string;
  padding?: string;
  position?: string;
  top?: string;
  transform?: string;
};

const StatusIcon: React.FC<StatusIconType> = (props: StatusIconType) => {
  const {
    icon,
    iconColor,
    text,
    textColor,
    padding,
    position,
    left,
    top,
    transform,
  } = props;

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

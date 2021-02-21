import StatusIcon from '@Components/StatusIcon';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusIconContainer } from '../style';

const ImageValidData: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <StatusIconContainer className="valid">
      <StatusIcon
        icon={faCheck}
        iconColor="#FFF"
        text={i18n.t('home:status.valid')}
        textColor="#FFF"
        padding="0"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      />
    </StatusIconContainer>
  );
};

export default ImageValidData;

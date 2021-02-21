import Button from '@Components/common/Button';
import StatusIcon from '@Components/StatusIcon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { StatusIconContainer } from '../style';

const ImageErrorData: React.FC = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  return (
    <>
      <StatusIconContainer className="error">
        <StatusIcon
          icon={faTimes}
          iconColor="#FFF"
          text={i18n.t('home:status.error')}
          textColor="#FFF"
          padding="0"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      </StatusIconContainer>
      <Button
        action={() => history.push('/capture-dni')}
        backgroundColor="#2F0079"
        fontWeight="bold"
        text={i18n.t('home:button.error')}
        textColor="#FFF"
        type="button"
        position="absolute"
        top="5rem"
        left="3.75rem"
      />
    </>
  );
};

export default ImageErrorData;

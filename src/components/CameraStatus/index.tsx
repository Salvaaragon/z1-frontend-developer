import Button from '@Components/common/Button';
import { Flex } from '@Components/custom/Flex';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Camera from './Camera';
import Status from './Status';

const CameraStatus: React.FC = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  return (
    <>
      <Camera />
      <Status />

      <Flex justifycontent="center" padding="8rem 0 5rem">
        <Button
          action={() => history.push('/')}
          type="link"
          text={i18n.t('capture:button')}
          textColor="#FFF"
          fontWeight="bold"
        />
      </Flex>
    </>
  );
};

export default React.memo(CameraStatus);

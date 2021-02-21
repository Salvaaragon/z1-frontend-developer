import Button from '@Components/common/Button';
import { Flex } from '@Components/custom/Flex';
import { RootState } from '@Store/reducers';
import { getStatus, ImageState } from '@Store/reducers/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Camera from './Camera';
import StatusApproved from './StatusApproved';
import StatusError from './StatusError';

const CameraStatus: React.FC = () => {
  const imageState: ImageState = useSelector(
    (state: RootState) => state.imageState,
  );

  const { i18n } = useTranslation();
  const history = useHistory();

  const status = getStatus(imageState);

  return (
    <>
      <Camera />

      {status === 'Too Much Glare' && <StatusError />}
      {status === 'error' && <StatusError />}
      {status === 'Approved' && <StatusApproved />}

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

export default CameraStatus;

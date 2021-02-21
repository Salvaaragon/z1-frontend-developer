import StatusIcon from '@Components/StatusIcon';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StatusApproved: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <StatusIcon
      iconColor="green"
      icon={faCheckCircle}
      text={i18n.t('capture:status.valid-photo')}
      textColor="#FFF"
    />
  );
};

export default StatusApproved;

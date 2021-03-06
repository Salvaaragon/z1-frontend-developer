import StatusIcon from '@Components/StatusIcon';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StatusError: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <StatusIcon
      iconColor="#FAB72D"
      icon={faLightbulb}
      text={i18n.t('capture:status.invalid-photo')}
      textColor="#FFF"
    />
  );
};
export default StatusError;

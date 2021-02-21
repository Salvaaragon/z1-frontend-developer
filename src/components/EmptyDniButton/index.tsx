import emptyDNI from '@Assets/images/dni-empty.svg';
import Button from '@Components/common/Button';
import Image from '@Components/common/Image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { EmptyDniButtonContainer } from './styles';

const EmptyDniButton: React.FC = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  return (
    <EmptyDniButtonContainer>
      <Image
        alt="empty-dni"
        borderRadius="12px"
        boxShadow="0 10px 20px -6px rgba(0,0,0,0.15)"
        height="124px"
        src={emptyDNI}
        padding="1.125rem"
        width="217px"
      />

      <Button
        action={() => history.push('/capture-dni')}
        backgroundColor="#2F0079"
        fontWeight="bold"
        text={i18n.t('home:button.default')}
        textColor="#FFF"
        type="button"
        position="absolute"
        top="3.5rem"
        left="3.25rem"
      />
    </EmptyDniButtonContainer>
  );
};

export default EmptyDniButton;

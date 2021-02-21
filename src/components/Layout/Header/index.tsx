import Text from '@Components/common/Text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CustomHeaderContainer } from './styles';

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <CustomHeaderContainer>
      <Text
        color="#2F0079"
        fontSize="21px"
        fontWeight="bold"
        fontStyle="italic"
        text={i18n.t('home:header.title')}
      />
    </CustomHeaderContainer>
  );
};

export default Header;

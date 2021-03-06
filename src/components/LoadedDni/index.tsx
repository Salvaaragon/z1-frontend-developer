import Image from '@Components/common/Image';
import React from 'react';
import ImageErrorData from './ImageErrorData';
import ImageValidData from './ImageValidData';
import { LoadedDniContainer } from './style';
import { LoadedDniProps } from './types';

const LoadedDni: React.FC<LoadedDniProps> = (props: LoadedDniProps) => {
  const { dni, status } = props;

  const getBorderColorByStatus = () => {
    if (status === 'error') return '#c00000';
    return '#69cc8b';
  };

  return (
    <LoadedDniContainer>
      <Image
        alt="empty-dni"
        borderRadius="12px"
        border={'solid 2px ' + getBorderColorByStatus()}
        height="216.75px"
        src={dni}
        width="289px"
      />

      {status === 'valid' && <ImageValidData />}
      {status === 'error' && <ImageErrorData />}
    </LoadedDniContainer>
  );
};

export default LoadedDni;

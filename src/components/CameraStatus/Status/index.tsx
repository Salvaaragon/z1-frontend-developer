import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import StatusApproved from '../StatusApproved';
import StatusError from '../StatusError';

const Status: React.FC = () => {
  const status = useSelector((state: RootState) => state.imageState.status);

  if (status === 'Too Much Glare' || status === 'error') return <StatusError />;
  else if (status === 'Approved') return <StatusApproved />;
  return <></>;
};

export default React.memo(Status);

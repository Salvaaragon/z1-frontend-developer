import { Grid } from '@Components/custom/Grid';
import EmptyDniButton from '@Components/EmptyDniButton';
import LoadedDni from '@Components/LoadedDni';
import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

const CurrentStatusImage: React.FC = () => {
  const status = useSelector((state: RootState) => state.imageState.status);
  const currentImage = useSelector(
    (state: RootState) => state.imageState.currentImage,
  );

  return (
    <Grid>
      {status === null && <EmptyDniButton />}
      {status === 'Approved' && currentImage && (
        <LoadedDni dni={currentImage} status="valid" />
      )}
      {status === 'Too Much Glare' && currentImage && (
        <LoadedDni dni={currentImage} status="error" />
      )}
    </Grid>
  );
};

export default React.memo(CurrentStatusImage);

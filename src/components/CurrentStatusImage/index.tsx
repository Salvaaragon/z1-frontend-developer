import { Grid } from '@Components/custom/Grid';
import EmptyDniButton from '@Components/EmptyDniButton';
import LoadedDni from '@Components/LoadedDni';
import { RootState } from '@Store/reducers';
import { getCurrentImage, getStatus, ImageState } from '@Store/reducers/image';
import React from 'react';
import { useSelector } from 'react-redux';

const CurrentStatusImage: React.FC = () => {
  const imageState: ImageState = useSelector(
    (state: RootState) => state.imageState,
  );

  const status = getStatus(imageState);
  const currentImage = getCurrentImage(imageState);

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

export default CurrentStatusImage;

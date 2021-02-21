import Camera from '@Components/CameraStatus';
import Text from '@Components/common/Text';
import { Grid } from '@Components/custom/Grid';
import Layout from '@Components/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CaptureDni: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Layout displayHeader={false}>
      <Grid>
        <Grid padding="6.5rem 1.8rem 1rem 1.8rem">
          <Text
            alignment="center"
            fontSize="1.313rem"
            fontWeight="bold"
            text={i18n.t('capture:title')}
          />
        </Grid>
        <Grid padding="0 1.8rem">
          <Text alignment="center" text={i18n.t('capture:hint1')} />
        </Grid>
        <Grid padding="0 1.8rem 1.8rem">
          <Text alignment="center" text={i18n.t('capture:hint2')} />
        </Grid>
        <Grid style={{ width: 500 }}>
          <Camera />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CaptureDni;

import Text from '@Components/common/Text';
import CurrentStatusImage from '@Components/CurrentStatusImage';
import { Grid } from '@Components/custom/Grid';
import Layout from '@Components/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Layout displayHeader={true}>
      <Grid padding="0 0 5rem 0">
        <Grid padding="2.25rem 1.8rem 1.8rem">
          <Text
            alignment="center"
            fontSize="1.313rem"
            fontWeight="bold"
            text={i18n.t('home:title')}
          />
        </Grid>
        <Grid padding="0 1.8rem 1.8rem">
          <Text alignment="center" text={i18n.t('home:description')} />
        </Grid>
        <CurrentStatusImage />
      </Grid>
    </Layout>
  );
};

export default Home;

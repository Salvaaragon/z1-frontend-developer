import { Grid } from '@Components/custom/Grid';
import React from 'react';
import Header from './Header';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, displayHeader } = props;

  return (
    <Grid>
      {displayHeader && <Header />}
      {children}
    </Grid>
  );
};

Layout.defaultProps = {
  displayHeader: false,
};

export default Layout;

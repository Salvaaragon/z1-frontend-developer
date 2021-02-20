import React, { ReactChild } from 'react';
import Header from './Header';

type LayoutProps = {
  displayHeader: boolean;
  children: ReactChild;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, displayHeader } = props;

  return (
    <div>
      {displayHeader && <Header />}
      {children}
    </div>
  );
};

Layout.defaultProps = {
  displayHeader: false,
};

export default Layout;

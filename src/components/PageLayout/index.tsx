import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// styles & components
import PageLayoutDesktop from './components/PageLayoutDesktop';

// types
import { PageLayoutProps } from './types';

export default function PageLayout({
  children,
  activeMenu,
  withNotificationMenus = []
}: PageLayoutProps) {
  const isMobile = useMediaQuery('(max-width:600px)');

  const pageLayoutDesktopProps = {
    children,
    activeMenu,
    withNotificationMenus
  };

  if (isMobile) {
    return <div>{children}</div>;
  }

  return <PageLayoutDesktop {...pageLayoutDesktopProps} />;
}

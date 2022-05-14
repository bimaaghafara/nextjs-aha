import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// styles & components
import PageLayoutDesktop from './components/PageLayoutDesktop';
import PageLayoutMobile from './components/PageLayoutMobile';

// types
import { PageLayoutProps } from './types';

export default function PageLayout({
  children,
  activeMenu,
  withNotificationMenus = [],
  isBottomNav
}: PageLayoutProps) {
  const isMobile = useMediaQuery('(max-width:600px)');

  const pageLayoutMobileProps = {
    children,
    activeMenu,
    isBottomNav
  };

  if (isMobile) {
    return <PageLayoutMobile {...pageLayoutMobileProps} />;
  }

  const pageLayoutDesktopProps = {
    children,
    activeMenu,
    withNotificationMenus
  };

  return <PageLayoutDesktop {...pageLayoutDesktopProps} />;
}

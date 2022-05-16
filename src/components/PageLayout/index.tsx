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
  const isDesktop = useMediaQuery('(min-width:601px)');

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

  if (isDesktop) {
    return <PageLayoutDesktop {...pageLayoutDesktopProps} />;
  }

  return null;
}

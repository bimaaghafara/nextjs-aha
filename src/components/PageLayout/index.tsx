import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// styles & components
import PageLayoutDesktop from './components/PageLayoutDesktop';
import PageLayoutMobile from './components/PageLayoutMobile';

// types
import { PageLayoutProps } from './types';

// constants
import { MOBILE_WIDTH, DESKTOP_WIDTH } from 'src/constants/Styles';

export default function PageLayout({
  children,
  activeMenu,
  withNotificationMenus = [],
  isBottomNav
}: PageLayoutProps) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const IS_DESKTOP = useMediaQuery(DESKTOP_WIDTH);

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

  if (IS_DESKTOP) {
    return <PageLayoutDesktop {...pageLayoutDesktopProps} />;
  }

  return null;
}

// import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Logo from '../Logo';
import Box from '@mui/material/Box';

// types
import { PageLayoutMobileProps } from './types';

export default function PageLayoutMobile({
  children,
  // activeMenu,
  isBottomNav
}: PageLayoutMobileProps) {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.topSection}>{isBottomNav ? <Logo /> : <div>Top Nav</div>}</Box>
      <Box sx={sx.content}>{children}</Box>
      {isBottomNav && <div>Bottom Nav</div>}
    </Box>
  );
}

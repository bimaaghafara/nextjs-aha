// import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Box from '@mui/material/Box';

// types
import { PageLayoutMobileProps } from './types';

export default function PageLayoutMobile({
  children,
  activeMenu,
  isBottomNav
}: PageLayoutMobileProps) {
  return (
    <Box sx={sx.content}>
      {isBottomNav ? <div>LOGO: {activeMenu}</div> : <div>Top Nav</div>}
      {children}
      {isBottomNav && <div>Bottom Nav</div>}
    </Box>
  );
}

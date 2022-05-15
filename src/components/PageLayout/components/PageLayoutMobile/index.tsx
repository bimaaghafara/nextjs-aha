import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Logo from '../Logo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// types
import { PageLayoutMobileProps } from './types';

export default function PageLayoutMobile({
  children,
  // activeMenu,
  isBottomNav
}: PageLayoutMobileProps) {
  const router = useRouter();

  return (
    <Box sx={sx.root}>
      <Box sx={sx.topSection}>
        {isBottomNav ? (
          <Logo />
        ) : (
          <Box sx={sx.backToHome} onClick={() => router.push('/')}>
            <ChevronLeftIcon />
            <Typography>Home Page</Typography>
          </Box>
        )}
      </Box>
      <Box sx={sx.content}>{children}</Box>
      {isBottomNav && <div>Bottom Nav</div>}
    </Box>
  );
}

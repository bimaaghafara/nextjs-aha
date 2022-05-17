import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Search() {
  const router = useRouter();
  console.log(router.query);

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']}>
      <Box sx={sx.topSection}>
        <Box sx={sx.backToHome} onClick={() => router.push('/')}>
          <ChevronLeftIcon />
          <Typography>Results</Typography>
        </Box>
      </Box>
    </PageLayout>
  );
}

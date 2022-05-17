import { useEffect } from 'react';
import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// services
import { getUsers } from './Services';

export default function Search() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { pageSize, keyword } = router.query;
      getUsers({ pageSize, keyword })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query, router.isReady]);

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

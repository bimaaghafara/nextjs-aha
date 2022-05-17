// import { useEffect } from 'react';
import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// services
import { useGetUsers } from './Services';

export default function Search() {
  const router = useRouter();
  const { data, isLoading, error } = useGetUsers(router.query, router.isReady);

  function renderContent() {
    if (error) return 'Error';
    if (isLoading || !data) return 'Loading...';
    return JSON.stringify(data, null, 4);
  }

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']}>
      <Box sx={{ color: '#fff' }}>
        <Box sx={sx.topSection}>
          <Box sx={sx.backToHome} onClick={() => router.push('/')}>
            <ChevronLeftIcon />
            <Typography>Results</Typography>
          </Box>
        </Box>
        {renderContent()}
      </Box>
    </PageLayout>
  );
}

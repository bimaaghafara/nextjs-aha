// import { useEffect } from 'react';
import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// services
import { useGetInfiniteUsers } from './Services';

export default function Search() {
  const router = useRouter();
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetInfiniteUsers(router.query, router.isReady);

  function renderContent() {
    if (error) return 'Error';
    if (isLoading || !data) return 'Loading...';
    return (
      <>
        <Grid container spacing={2}>
          {data.pages.map((page) =>
            page.response.data.map((user) => (
              <Grid key={user.id} item xs={12} sm={4}>
                {user.name}
              </Grid>
            ))
          )}
        </Grid>
        <LoadingButton
          onClick={() => {
            if (hasNextPage) fetchNextPage();
          }}
          loading={isFetchingNextPage}
          loadingPosition="end"
          variant="outlined"
          sx={sx.buttonMore}
        >
          {hasNextPage ? 'MORE' : 'Nothing more to load'}
        </LoadingButton>
      </>
    );
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

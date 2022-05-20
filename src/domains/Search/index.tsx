import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Skeletons from './components/Skeletons';
import PageLayout from 'src/components/PageLayout';
import FollowersFollowing from 'src/components/FollowersFollowing';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// services
import { useGetInfiniteUsers } from './Services';

export default function Search() {
  const router = useRouter();
  const pageSize = Number(router.query.pageSize || 0);
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetInfiniteUsers(router.query, router.isReady);

  function renderContent() {
    if (error) return <>Error!</>;
    if (isLoading || !data) return <Skeletons pageSize={pageSize} />;
    return (
      <>
        <Grid container sx={sx.usersContainer}>
          {data.pages.map((page) =>
            page.response.data.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} md={4} sx={sx.userContainer}>
                <Box sx={sx.userImg(user.avater)} />
                <Typography sx={sx.userName}>{user.name}</Typography>
                <Typography sx={sx.userUsername}>{user.username}</Typography>
              </Grid>
            ))
          )}
        </Grid>
        <LoadingButton
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          loadingPosition="end"
          endIcon={<></>}
          variant="outlined"
          sx={sx.buttonMore}
          disabled={!hasNextPage}
        >
          {hasNextPage ? 'MORE' : 'Nothing more to load'}
        </LoadingButton>
      </>
    );
  }

  return (
    <PageLayout
      activeMenu="home"
      withNotificationMenus={['tags']}
      sideContent={<FollowersFollowing />}
    >
      <Box sx={sx.root}>
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

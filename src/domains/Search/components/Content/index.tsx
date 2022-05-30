import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Skeletons from '../Skeletons';
import LoadMoreButton from 'src/components/LoadMoreButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageLayout from 'src/components/PageLayout';
import FollowersFollowing from 'src/components/FollowersFollowing';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// types
import { ContentProps } from '../../types';

export default function SearchContent({
  error,
  isLoading,
  data,
  pageSize,
  noResults,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage
}: ContentProps) {
  const router = useRouter();
  const renderContent = () => {
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
        {noResults && <Box mb={1}>No results found.</Box>}
        {!noResults && (
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
            sx={sx.buttonMore}
            disabled={!hasNextPage}
            label={hasNextPage ? 'MORE' : 'Nothing more to load'}
          />
        )}
      </>
    );
  };

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

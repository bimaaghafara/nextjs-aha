import { useEffect } from 'react';
import homeService from './service';

// styles & component
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Home() {
  useEffect(() => {
    homeService
      .getUsers()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']} isBottomNav>
      <Box sx={sx.root}>
        <Typography component="h5" sx={sx.title}>
          Search
        </Typography>
        <TextField placeholder="Keyword" variant="outlined" fullWidth sx={sx.textfieldKeyword} />
      </Box>
    </PageLayout>
  );
}

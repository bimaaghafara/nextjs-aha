import { useEffect } from 'react';
import homeService from './service';

// styles & component
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Typography component="h5" sx={sx.titleSearch}>
          Search
        </Typography>
        <TextField placeholder="Keyword" variant="outlined" fullWidth sx={sx.textfieldKeyword} />
        <Box sx={sx.line} />
        <Typography component="h5" sx={sx.titleResults}>
          # Of Results Per Page
        </Typography>
        <Box sx={sx.perPage}>
          <Typography component="h3" sx={sx.perPageValue}>
            30
          </Typography>
          <Typography sx={sx.perPageResults}>results</Typography>
        </Box>

        <Button variant="contained" sx={sx.buttonSearch}>
          Search
        </Button>
      </Box>
    </PageLayout>
  );
}

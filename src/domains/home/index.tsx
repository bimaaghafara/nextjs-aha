import { useEffect, useState } from 'react';
import homeService from './service';

// styles & component
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

export default function Home() {
  const perPages = [3, 6, 9, 12, 15, 50];
  const [keyword, setKeyword] = useState<string>();
  const [perPage, setPerPage] = useState<number>(perPages[0]);

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

  const handleSearch = () => {
    console.log(keyword, perPage);
  };

  return (
    <PageLayout activeMenu="home" withNotificationMenus={['tags']} isBottomNav>
      <Box sx={sx.root}>
        <Typography component="h5" sx={sx.titleSearch}>
          Search
        </Typography>
        <TextField
          placeholder="Keyword"
          variant="outlined"
          fullWidth
          sx={sx.textfieldKeyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
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
        <Box>
          <Slider
            sx={sx.slider}
            aria-label="Per Page"
            defaultValue={0}
            min={0}
            step={1}
            max={perPages.length - 1}
            onChange={(e, newValue) => setPerPage(perPages[newValue as number])}
            marks={perPages.map((e, i) => ({ value: i, label: e }))}
          />
        </Box>
        <Button variant="contained" sx={sx.buttonSearch} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </PageLayout>
  );
}

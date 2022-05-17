import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const defaultPerPagesIndex = 2;
  const perPages = [3, 6, 9, 12, 15, 50];
  const [keyword, setKeyword] = useState<string>();
  const [perPage, setPerPage] = useState<number>(perPages[defaultPerPagesIndex]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>();

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
    setIsSubmitted(true);
    if (keyword && perPage) {
      router.push(`/results?keyword=${keyword}&perPage=${perPage}`);
    }
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
          error={isSubmitted && !keyword}
          helperText={isSubmitted && !keyword && 'Search keyword is required!'}
        />
        <Box sx={sx.topLine} />
        <Typography component="h5" sx={sx.titleResults}>
          # Of Results Per Page
        </Typography>
        <Box sx={sx.perPage}>
          <Typography component="h3" sx={sx.perPageValue}>
            {perPage}
          </Typography>
          <Typography sx={sx.perPageResults}>results</Typography>
        </Box>
        <Box>
          <Slider
            sx={sx.slider(perPages.findIndex((e) => e === perPage))}
            aria-label="Per Page"
            defaultValue={defaultPerPagesIndex}
            min={0}
            step={1}
            max={perPages.length - 1}
            onChange={(e, newValue) => setPerPage(perPages[newValue as number])}
            marks={perPages.map((e, i) => ({ value: i, label: e }))}
          />
        </Box>
        <Box sx={sx.bottomLine} />
        <Button variant="contained" sx={sx.buttonSearch} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </PageLayout>
  );
}

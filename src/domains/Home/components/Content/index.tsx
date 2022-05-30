import { useState } from 'react';
import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import PageLayout from 'src/components/PageLayout';
import FollowersFollowing from 'src/components/FollowersFollowing';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

export default function HomeContent() {
  const router = useRouter();
  const defaultpageSizesIndex = 2;
  const pageSizes = [3, 6, 9, 12, 15, 50];
  const [keyword, setKeyword] = useState<string>('');
  const [pageSize, setpageSize] = useState<number>(pageSizes[defaultpageSizesIndex]);

  const handleSearch = () => {
    router.push(`/search?keyword=${keyword}&pageSize=${pageSize}`);
  };

  return (
    <PageLayout
      activeMenu="home"
      withNotificationMenus={['tags']}
      isBottomNav
      sideContent={<FollowersFollowing />}
    >
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
        <Box sx={sx.topLine} />
        <Typography component="h5" sx={sx.titleResults}>
          # Of Results Per Page
        </Typography>
        <Box sx={sx.pageSize}>
          <Typography component="h3" sx={sx.pageSizeValue}>
            {pageSize}
          </Typography>
          <Typography sx={sx.pageSizeLabel}>results</Typography>
        </Box>
        <Box>
          <Slider
            sx={sx.slider(pageSizes.findIndex((e) => e === pageSize))}
            aria-label="Per Page"
            defaultValue={defaultpageSizesIndex}
            min={0}
            step={1}
            max={pageSizes.length - 1}
            onChange={(e, newValue) => setpageSize(pageSizes[newValue as number])}
            marks={pageSizes.map((e, i) => ({ value: i, label: e }))}
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

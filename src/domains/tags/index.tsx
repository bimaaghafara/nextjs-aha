import PageLayout from 'src/components/PageLayout';

// styles & components
import { Styles as sx } from './Styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tags() {
  function renderContent() {
    return (
      <Box sx={sx.tagsContainer}>
        {Array(12)
          .fill(1)
          .map((e, i) => (
            <Box key={e * i} sx={sx.tagContainer}>
              <Box sx={sx.tag}>
                <Box sx={sx.tagBoxContainer}>
                  <Box sx={sx.tagBox}>
                    <Typography>Cool</Typography>
                  </Box>
                </Box>
                <Typography sx={sx.tagName}>Cool</Typography>
                <Typography sx={sx.tagCount}>123 {i < 5 ? 'Results' : 'Questions'}</Typography>
              </Box>
            </Box>
          ))}
      </Box>
    );
  }

  return (
    <PageLayout activeMenu="tags">
      <Box sx={sx.root}>
        <Box sx={sx.topSection}>
          <Typography>Results</Typography>
        </Box>
        {renderContent()}
      </Box>
    </PageLayout>
  );
}

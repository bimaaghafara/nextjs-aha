import PageLayout from 'src/components/PageLayout';

// styles & components
import { Styles as sx } from './Styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Tags() {
  function renderContent() {
    return <div>content list!</div>;
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

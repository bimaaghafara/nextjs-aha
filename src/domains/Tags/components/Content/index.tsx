import PageLayout from 'src/components/PageLayout';

// styles & components
import { Styles as sx } from './Styles';
import Skeletons from '../Skeletons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// types
import { ContentProps } from '../../types';

export default function TagsContent({ data, error, isLoading }: ContentProps) {
  function renderContent() {
    if (error) return <>Error!</>;
    if (isLoading || !data) return <Skeletons />;
    return (
      <Box sx={sx.tagsContainer}>
        {data.map((tag, i) => (
          <Box key={tag.id} sx={sx.tagContainer}>
            <Box sx={sx.tag}>
              <Box sx={sx.tagBoxContainer}>
                <Box sx={sx.tagBox}>
                  <Typography>{tag.name}</Typography>
                </Box>
              </Box>
              <Typography sx={sx.tagName}>{tag.name}</Typography>
              <Typography sx={sx.tagCount}>
                {tag.count} {i < 5 ? 'Results' : 'Questions'}
              </Typography>
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
          <Typography>Tags</Typography>
        </Box>
        {renderContent()}
      </Box>
    </PageLayout>
  );
}

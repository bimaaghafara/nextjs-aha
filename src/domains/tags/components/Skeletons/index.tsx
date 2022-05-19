// styles & components
import { Styles as sx } from './Styles';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Skeletons() {
  return (
    <Box sx={sx.skeletonsContainer}>
      {Array(15)
        .fill(1)
        .map((e, i) => (
          <Box key={e * i} sx={sx.skeletonContainer}>
            <Skeleton sx={sx.skeletonBox} />
            <Skeleton sx={sx.skeletonName} />
            <Skeleton sx={sx.skeletonCount} />
          </Box>
        ))}
    </Box>
  );
}

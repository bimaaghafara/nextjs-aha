// styles & components
import { Styles as sx } from './Styles';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

// types
import { SkeletonsProps } from '../../types';

export default function Skeletons({ pageSize }: SkeletonsProps) {
  return (
    <Grid container spacing={2} sx={sx.skeletonsContainer}>
      {Array(pageSize > 15 ? 15 : pageSize)
        .fill(1)
        .map((e, i) => (
          <Grid key={e * i} item xs={12} sm={6} md={4} sx={sx.skeletonContainer}>
            <Skeleton sx={sx.skeletonImg} />
            <Skeleton sx={sx.skeletonName} />
            <Skeleton sx={sx.skeletonUsername} />
          </Grid>
        ))}
    </Grid>
  );
}

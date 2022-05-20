// styles & components
import { Styles as sx } from './Styles';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Skeletons() {
  return (
    <List sx={sx.skeletonsContainer}>
      {Array(10)
        .fill(1)
        .map((e, i) => (
          <ListItem key={e * i} sx={sx.listItem} secondaryAction={<Skeleton />}>
            <ListItemAvatar>
              <Avatar variant="rounded" sx={sx.avatar}>
                <Skeleton />
              </Avatar>
            </ListItemAvatar>
            <ListItemText sx={sx.text} primary={<Skeleton />} secondary={<Skeleton />} />
          </ListItem>
        ))}
    </List>
  );
}

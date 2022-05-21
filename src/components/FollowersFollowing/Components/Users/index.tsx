// styles & components
import { Styles as sx } from './Styles';
import LoadMoreButton from 'src/components/LoadMoreButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

// types
import { UsersProps } from './types';

export default function Users({ users, type }: UsersProps) {
  const isFollowingButton = (i: number) => type === 'following' || [2, 5].includes(i);

  return (
    <List sx={sx.root}>
      {users.map((user, i) => (
        <ListItem
          key={user.id}
          sx={sx.listItem}
          secondaryAction={
            <Button
              sx={[sx.rightButton, isFollowingButton(i) && sx.rightButtonFollowing]}
              variant="outlined"
            >
              {isFollowingButton(i) ? 'following' : 'follow'}
            </Button>
          }
        >
          <ListItemAvatar>
            <Avatar variant="rounded" sx={sx.avatar}>
              <ImageIcon />
              <Box sx={sx.avatarImage(user.avater)} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText sx={sx.text} primary={user.name} secondary={`@${user.username}`} />
        </ListItem>
      ))}
      <ListItem sx={sx.listItem}>
        <LoadMoreButton onClick={() => {}} loading={false} label="More" />
      </ListItem>
    </List>
  );
}

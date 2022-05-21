import { User } from 'src/domains/Search/types';

export type UsersProps = {
  users: User[];
  type: 'followers' | 'following';
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  noResults?: boolean;
};

import { InfiniteData } from 'react-query';

export type User = {
  avater: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
};

export type GetUsersResponse = {
  data: User[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type ContentProps = {
  error: unknown;
  isLoading: boolean;
  data?: InfiniteData<{
    response: GetUsersResponse;
    nextPage: number | null;
  }>;
  pageSize: number;
  noResults: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
};

export type SkeletonsProps = {
  pageSize: number;
};

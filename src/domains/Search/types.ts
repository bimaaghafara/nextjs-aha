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

export type SkeletonsProps = {
  pageSize: number;
};

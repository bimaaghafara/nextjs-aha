// styles & components
import Skeletons from '../Skeletons';
import Users from '../Users';

// services
import { useGetInfiniteFollowers } from './Services';

export default function Followers() {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetInfiniteFollowers();
  const noResults = !data?.pages?.[0]?.response?.data?.length;
  const usersArray = data?.pages?.map((page) => page.response.data);
  const users = usersArray?.reduce((prev, curr) => [...prev, ...curr], []) || [];

  if (error) return <>Error!</>;
  if (isLoading || !data) return <Skeletons />;
  return (
    <Users
      type="followers"
      users={users}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      noResults={noResults}
    />
  );
}

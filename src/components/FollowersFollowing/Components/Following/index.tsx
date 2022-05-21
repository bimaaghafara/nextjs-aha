// styles & components
import Skeletons from '../Skeletons';
import Users from '../Users';

// services
import { useGetInfiniteFollowing } from './Services';

export default function Following() {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetInfiniteFollowing();
  const noResults = !data?.pages?.[0]?.response?.data?.length;
  const usersArray = data?.pages?.map((page) => page.response.data);
  const users = usersArray?.reduce((prev, curr) => [...prev, ...curr], []) || [];

  if (error) return <>Error!</>;
  if (isLoading || !data) return <Skeletons />;
  return (
    <Users
      type="following"
      users={users}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      noResults={noResults}
    />
  );
}

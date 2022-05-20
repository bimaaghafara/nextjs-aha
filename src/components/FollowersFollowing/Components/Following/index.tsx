// styles & components
import Users from '../Users';

// services
import { useGetFollowing } from '../../Services';

export default function Following() {
  const { data, error, isLoading } = useGetFollowing();
  console.log({ data, error, isLoading });

  if (error) return <>Error!</>;
  if (isLoading || !data) return <>Loading</>;
  return <Users type="following" users={data.data} />;
}

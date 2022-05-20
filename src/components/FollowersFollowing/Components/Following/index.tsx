// styles & components
import Skeletons from '../Skeletons';
import Users from '../Users';

// services
import { useGetFollowing } from '../../Services';

export default function Following() {
  const { data, error, isLoading } = useGetFollowing();

  if (error) return <>Error!</>;
  if (isLoading || !data) return <Skeletons />;
  return <Users type="following" users={data.data} />;
}

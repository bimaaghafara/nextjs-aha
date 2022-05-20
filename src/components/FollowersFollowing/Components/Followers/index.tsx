// styles & components
import Skeletons from '../Skeletons';
import Users from '../Users';

// services
import { useGetFollowers } from '../../Services';

export default function Followers() {
  const { data, error, isLoading } = useGetFollowers();

  if (error) return <>Error!</>;
  if (isLoading || !data) return <Skeletons />;
  return <Users type="followers" users={data.data} />;
}

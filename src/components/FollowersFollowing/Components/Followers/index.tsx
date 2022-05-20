import { useGetFollowers } from '../../Services';

export default function Followers() {
  const { data, error, isLoading } = useGetFollowers();
  console.log({ data, error, isLoading });

  if (error) return <>Error!</>;
  if (isLoading || !data) return <>Loading</>;
  return <div>Followers!!!</div>;
}

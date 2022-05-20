import { useGetFollowing } from '../../Services';

export default function Following() {
  const { data, error, isLoading } = useGetFollowing();
  console.log({ data, error, isLoading });

  if (error) return <>Error!</>;
  if (isLoading || !data) return <>Loading</>;
  return <div>Following!!!</div>;
}

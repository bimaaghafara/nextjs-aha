import { useRouter } from 'next/router';

// styles & components
import SearchContent from './components/Content';

// services
import { useGetInfiniteUsers } from './Services';

export default function Search() {
  const router = useRouter();
  const pageSize = Number(router.query.pageSize || 0);
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetInfiniteUsers(router.query, router.isReady);
  const noResults = !data?.pages?.[0]?.response?.data?.length;

  const contentProps = {
    error,
    isLoading,
    data,
    pageSize,
    noResults,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  };

  return <SearchContent {...contentProps} />;
}

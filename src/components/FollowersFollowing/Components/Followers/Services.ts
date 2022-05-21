import http from 'src/services/http';
import { useInfiniteQuery } from 'react-query';

// types
import { GetUsersResponse } from 'src/domains/Search/types';

export const useGetInfiniteFollowers = () => {
  const getInfiniteFollowers = async ({ pageParam = 1 }) => {
    const { data } = await http.get<GetUsersResponse>(`/users/all?page=${pageParam}&pageSize=15`);
    const { page, totalPages } = data;
    return {
      response: data,
      nextPage: page < totalPages ? page + 1 : null
    };
  };

  return useInfiniteQuery(['getInfiniteFollowers'], getInfiniteFollowers, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
};

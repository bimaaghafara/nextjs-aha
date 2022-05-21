import http from 'src/services/http';
import { useInfiniteQuery } from 'react-query';

// types
import { GetUsersResponse } from 'src/domains/Search/types';

export const useGetInfiniteFollowing = () => {
  const getInfiniteFollowing = async ({ pageParam = 1 }) => {
    const { data } = await http.get<GetUsersResponse>(
      `/users/friends?page=${pageParam}&pageSize=15`
    );
    const { page, totalPages } = data;
    return {
      response: data,
      nextPage: page < totalPages ? page + 1 : null
    };
  };

  return useInfiniteQuery(['getInfiniteFollowing'], getInfiniteFollowing, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
};

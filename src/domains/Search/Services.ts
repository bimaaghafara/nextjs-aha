import http from 'src/services/http';
import { useInfiniteQuery } from 'react-query';

// types
import { ParsedUrlQuery } from 'querystring';
import { GetUsersResponse } from './types';

export const useGetInfiniteUsers = (variables: ParsedUrlQuery, enabled: boolean) => {
  const { pageSize = '10', keyword = '' } = variables;
  const getInfiniteUsers = async ({ pageParam = 1 }) => {
    const { data } = await http.get<GetUsersResponse>(
      `/users/all?page=${pageParam}&pageSize=${pageSize}&keyword=${keyword}`
    );
    const { page, totalPages } = data;
    return { response: data, nextPage: page < totalPages ? page + 1 : null };
  };

  return useInfiniteQuery(['getInfinityUsers', variables], getInfiniteUsers, {
    enabled,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });
};

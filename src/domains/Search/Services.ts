import http from 'src/services/http';
import { useQuery } from 'react-query';

// types
import { ParsedUrlQuery } from 'querystring';

export const getUsers = async ({ page = '1', pageSize = '10', keyword = '' }: ParsedUrlQuery) => {
  const { data } = await http.get(
    `/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  );
  return data;
};

export const useGetUsers = (variables: ParsedUrlQuery, enabled: boolean) => {
  return useQuery(['getUsers', variables], () => getUsers(variables), {
    enabled
  });
};

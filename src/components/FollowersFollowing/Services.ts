import http from 'src/services/http';
import { useQuery } from 'react-query';

// types
import { GetUsersResponse } from 'src/domains/Search/types';

export const useGetFollowers = () => {
  const getFollowers = async () => {
    const { data } = await http.get<GetUsersResponse>('/users/all?page=1&pageSize=15');
    return data;
  };

  return useQuery(['getFollowers'], getFollowers);
};

export const useGetFollowing = () => {
  const getFollowing = async () => {
    const { data } = await http.get<GetUsersResponse>('/users/friends?page=1&pageSize=15');
    return data;
  };

  return useQuery(['getFollowing'], getFollowing);
};

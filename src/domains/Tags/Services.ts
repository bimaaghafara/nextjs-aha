import http from 'src/services/http';
import { useQuery } from 'react-query';

// types
import { Tags } from './types';

export const useGetTags = () => {
  const getTags = async () => {
    const { data } = await http.get<Tags>('/tags');
    return data;
  };

  return useQuery(['getTags'], getTags);
};

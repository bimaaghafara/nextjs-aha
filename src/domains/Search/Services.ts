import http from 'src/services/http';

// types
import { ParsedUrlQuery } from 'querystring';

export const getUsers = ({ page = '1', pageSize = '10', keyword = '' }: ParsedUrlQuery) => {
  return http.get(`/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
};

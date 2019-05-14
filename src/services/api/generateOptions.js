import qs from 'qs';
import config from './config';

export default ({
  method, path, query, body, withAuth = config.defaultWithAuth, file = false, error,
}) => ({
  path: `${config.apiUrl}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
  options: {
    credentials: 'include',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      ...(withAuth ? { 'x-access-token': localStorage.getItem('x-access-token') } : {}),
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
  errorConfig: error,
});

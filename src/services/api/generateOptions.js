import qs from 'qs';
import API_ENDPOINT from '../../../config/api';

export default ({
  method, path, query, body, withAuth = true, file = false,
}) => ({
  path: `${API_ENDPOINT}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
  options: {
    credentials: 'include',
    headers: {
      ...(withAuth
        ? { 'x-access-token': localStorage.getItem('x-access-token') }
        : {}
      ),
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
});

import qs from 'qs';
import API_ENDPOINT from '../../../config/api';

export default ({
  method, path, query, body, file = false,
}) => ({
  path: `${API_ENDPOINT}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
  options: {
    credentials: 'include',
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  },
  file,
});

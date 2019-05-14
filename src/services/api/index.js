import generateOptions from './generateOptions';
import request from './request';

const setupRequest = ({
  method, path, body, withAuth, file, query, error,
}) => request(generateOptions({
  method, path, body, withAuth, file, query, error,
}));

export default {
  get: (args) => setupRequest({ method: 'GET', ...args }),
  del: (args) => setupRequest({ method: 'DELETE', ...args }),
  post: (args) => setupRequest({ method: 'POST', ...args }),
  put: (args) => setupRequest({ method: 'PUT', ...args }),
  patch: (args) => setupRequest({ method: 'PATCH', ...args }),
};

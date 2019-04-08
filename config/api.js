const getApiEndPoint = () => {
  switch (process.env.APP_ENV) {
  case 'production':
    return 'http://localhost:3001/api/';
  default:
    return 'http://localhost:3001/api/';
  }
};

export default getApiEndPoint();

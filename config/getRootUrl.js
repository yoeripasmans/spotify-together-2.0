const getRootUrl = () => {
  switch (process.env.APP_ENV) {
  case 'production':
    return 'http://localhost:3001';
  default:
    return 'http://localhost:3001';
  }
};

export default getRootUrl();

const getApiEndPoint = () => {
  switch (process.env.APP_ENV) {
  case 'production':
    return 'http://spotifytogether.labela.nl/api/';
  case 'test':
    return 'http://spotify-together-api.peggy/api/';
  default:
    return 'http://localhost:3001/api/';
  }
};

export default getApiEndPoint();

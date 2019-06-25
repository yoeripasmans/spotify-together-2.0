const getRootUrl = () => {
  switch (process.env.APP_ENV) {
  case 'acceptation':
    return 'https://spotifytogether.labela.nl/';
  case 'test':
    return 'http://spotify-together-api.peggy';
  default:
    return 'http://localhost:3001';
  }
};

export default getRootUrl();

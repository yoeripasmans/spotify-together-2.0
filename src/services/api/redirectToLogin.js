export default () => {
  localStorage.removeItem('x-access-token');

  window.location = '/';
};

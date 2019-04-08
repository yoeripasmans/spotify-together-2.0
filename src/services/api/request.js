import 'isomorphic-fetch';

export default ({ path, options, file }) => new Promise((resolve, reject) => {
  fetch(path, options)
    .then((response) => {
      if (response.ok) {
        if (file) return response.blob();
        return response.json();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err) => {
          reject(err);
        }).catch();
      } catch (err) {
        reject(json);
      }
    });
});

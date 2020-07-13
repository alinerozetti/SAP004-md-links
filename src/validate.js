const axios = require('axios')
const status = (urls, status) => {
  return urls.map((url, index) => ({
    ...url,
    status: status[index]
  }))
}

const urlValidate = function (urlList) {
  return new Promise(resolve => {
    const validate = urlList.map(item => {
      return axios.get(item.href)
        .then(result => {
          return result.status === 200 ? `OK - ${result.status}` : `fail - 404`;
        })
        .catch(() => {
            return 'fail - 404';
        });
    })
    Promise.all(validate)
      .then(result => {
        resolve(status(urlList, result));
      })
  })
};

module.exports = urlValidate;

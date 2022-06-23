const send = function (url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((statusCode) => {
      if (statusCode.status === 200) {
        resolve(statusCode.json());
      } else {
        reject("We have error, status code: " + statusCode.status);
      }
    });
  });
};

const url = "https://api.first.org/data/v1/countries";

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

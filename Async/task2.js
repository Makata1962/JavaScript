class Countries {
  constructor(url) {
    this.url = url;
  }

  send(region) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.first.org/data/v1/countries?region=${region}`).then(
        (statusCode) => {
          if (statusCode.status === 200) {
            resolve(
              statusCode.json().then((statusCode) => console.log(statusCode.data))
            );
          } else {
            reject("We have error, status code: " + statusCode.status);
          }
        }
      );
    });
  }
}

const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send("africa");
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();

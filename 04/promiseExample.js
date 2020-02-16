exports.fakeFetchDataSuccessfull = () => {
  return Promise.resolve({ data: 'some data' });
};

exports.fakeFetchDataFailed = () => {
  const fakeError = new Error('Fake fetch failed');
  return Promise.reject(fakeError);
};

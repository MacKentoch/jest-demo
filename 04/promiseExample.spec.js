'use strict';

const {
  fakeFetchDataSuccessfull,
  fakeFetchDataFailed
} = require('./promiseExample');

describe('promiseExample', () => {
  it('Should resolve and return async data', async () => {
    await expect(fakeFetchDataSuccessfull()).resolves.toEqual({
      data: 'some data'
    });
  });

  it('Should reject and return error', async () => {
    await expect(fakeFetchDataFailed()).rejects.toThrow('Fake fetch failed');
  });
});

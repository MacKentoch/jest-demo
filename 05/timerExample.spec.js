'use strict';

describe('timerExample', () => {
  jest.useFakeTimers();

  it('Should trigger a timeout after 1 second', () => {
    const { timerExample } = require('./timerExample');

    timerExample();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});

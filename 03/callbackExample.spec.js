const { callbackExample } = require('./callbackExample');

describe('', () => {
  it('Should call callback and return true', (done = () => {}) => {
    function callback(isSuccessfull) {
      expect(isSuccessfull).toBe(true);
      // To make test wait for done
      done();
    }

    callbackExample(callback);
  });
});

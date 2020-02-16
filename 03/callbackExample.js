'use strict';

function fakeHeavyProccess() {
  return true;
}

function callbackExample(callbackFct = () => {}) {
  // some heavy or async process (just a fake here since we will talk about async and timer later):
  const heavyProcessSuccessFull = fakeHeavyProccess();

  if (heavyProcessSuccessFull) {
    return callbackFct(true);
  }

  return callbackFct(false);
}

exports.callbackExample = callbackExample;

'use strict';

const { sortThisArray } = require('./sortFunction');

describe('', () => {
  it('Should sort an array of number', () => {
    const unOrderedArray = [65, 0, 1, 32, 98];

    expect(sortThisArray(unOrderedArray)).toEqual([0, 1, 32, 65, 98]);
  });
});

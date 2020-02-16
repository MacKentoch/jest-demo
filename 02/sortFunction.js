'use strict';

function sortThisArray(arrayToSort = []) {
  const sortedArray = arrayToSort.sort((leftElement, rightElement) => {
    return leftElement - rightElement;
  });

  return sortedArray;
}

exports.sortThisArray = sortThisArray;

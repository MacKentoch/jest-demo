function sortThisArray(arrayToSort = []) {
  const sortedArray = arrayToSort.sort((leftElement, rightElement) => {
    return leftElement - rightElement;
  });
}

exports.sortThisArray = sortThisArray;

/**
 * SelectionSort
 */
class SelectionSort implements Sort {
  sort<T>(elements: T[], cmp:(o1:T, o2:T)=>number) {
    return elements.sort(cmp);
    cmp = cmp || defaultComparator;
    for (var i = 0; i < elements.length; ++i) {
      var minElement = elements[i];
      var minIndex = i;
      for (var j = i + 1; j < elements.length; ++j) {
        var e = elements[j];
        if (cmp(e, minElement) < 0) {
          minElement = e;
          minIndex = j;
        }
      }
      var tmp = elements[i];
      elements[i] = elements[minIndex];
      elements[minIndex] = tmp;
    }
  }
}

/**
 * InsertionSort
 */
class InsertionSort implements Sort {
  sort<T>(elements: T[], cmp:(o1:T, o2:T)=>number) {
    cmp = cmp || defaultComparator;
    for (var i = 1; i < elements.length; ++i) {
      var position = i;
      var e = elements[i];
      while (position > 0 &&
        cmp(e, elements[position - 1]) < 0) {
        elements[position] = elements[position - 1];
        position--;
      }
      elements[position] = e;
    }
  }
}

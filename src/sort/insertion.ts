/**
 * InsertionSort
 */
class InsertionSort implements Sort {
  sort<T>(elements: T[]) {
    for (var i = 1; i < elements.length; ++i) {
      var position = i;
      var e = elements[i];
      while (position > 0 &&
        (e < elements[position - 1])) {
        elements[position] = elements[position - 1];
        position--;
      }
      elements[position] = e;
    }
  }
}
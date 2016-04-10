function testSort(sort: Sort) {
  describe('numbers', function() {
    for (var i = 0; i < 10; i++) {
      const r = randomArray(i);
      it(`should sort ${i}-element array of numbers`, function() {
        var q = r.slice();
        var copy = q.slice();
        sort.sort(q);
        copy.sort((a, b) => a - b);
        expect(q).toEqual(copy);
      })

      it(`should sort ${i}-element array of strings`, function() {
        var q = r.map(String);
        var copy = q.slice();
        sort.sort(q);
        copy.sort();
        expect(q).toEqual(copy);
      })
    }
  })

  function randomArray(n: number): number[] {
    var result: number[] = [];
    for (var i = 0; i < n; i++) {
      result.push(Math.random() * 1000 | 1);
    }
    return result;
  }
}

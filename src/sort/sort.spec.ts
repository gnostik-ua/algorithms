function testSort(sort: Sort, name: string) {
  describe(name, function () {
    describe('numbers', function () {
      for (let i = 0; i < 15; i++) {
        const r = randomArray(i);
        it(`should sort ${i}-element array of numbers`, function () {
          var q = r.slice();
          var copy = q.slice();
          var compareNumbers = (a, b) => a - b;
          sort.sort(q, compareNumbers);
          copy.sort(compareNumbers);
          expect(q).toEqual(copy);
        })

        it(`should sort ${i}-element array of strings`, function () {
          var q = r.map(String);
          var copy = q.slice();
          sort.sort(q);
          copy.sort();
          expect(q).toEqual(copy);
        })

        var counter = 0;

        it(`should sort ${i}`, function () {
          var q = r.map(String);
          q.sort();
          q.reverse();
          var copy = q.slice();
          counter = 0;
          sort.sort(q, (q, w) => {
            counter++;
            return defaultComparator(q, w);
          });
          console.log(name, i, counter);
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
  })
}

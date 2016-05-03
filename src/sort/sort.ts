interface Sort {
  sort<T>(a: T[], cmp?: (o1:T, o2:T)=>number): void;
}

function defaultComparator<T>(o1:T, o2:T) {
  if (o1 === o2) return 0;
  var s1 = String(o1);
  var s2 = String(o2);
  return s1 < s2 ? -1 :
    s1 > s2 ? 1 : 0;
}

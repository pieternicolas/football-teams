export const groupBy = <T, U>(
  list: Array<U>,
  keyGetter: (input: U) => T,
): Map<T, Array<U>> => {
  const map = new Map<T, Array<U>>();

  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);

    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return map;
};

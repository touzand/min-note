export const countBgOccurrences = arr => {
  return arr.reduce((countMap, obj) => {
    const {background_color} = obj;
    countMap[background_color] = (countMap[background_color] || 0) + 1;
    return countMap;
  }, {});
};

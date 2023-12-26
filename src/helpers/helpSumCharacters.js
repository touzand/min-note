export const sumCharacters = (arr) => {
  let sum = 0;

  arr.forEach(obj => {
    if (obj.hasOwnProperty('body') && typeof obj.body === 'string') {
      sum += obj.body.length;
    }
  });

  return sum;
}

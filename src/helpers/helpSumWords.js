export const sumWords = (arr) => {
  let sum = 0;

  arr.forEach(obj => {
    if (obj.hasOwnProperty('body') && typeof obj.body === 'string') {
      console.log(obj.body.split(' ').length);
      sum += obj.body.split(' ').length;
    }
  });

  return sum;
}

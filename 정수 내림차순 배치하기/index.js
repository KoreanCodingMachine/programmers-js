function solution(n) {
  const c = n.toString();
  let new_array = c.split('');
  new_array.sort((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });
  let str = new_array.join('');
  let num = parseInt(str);
  console.log(num);
  return num;
}

solution(118372);

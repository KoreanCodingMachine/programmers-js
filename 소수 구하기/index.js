function solution(n) {
  let result = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      continue;
    }
    result.push(i);
  }
  console.log(result.length);
  console.log(result);
  return true;
}

solution(10);

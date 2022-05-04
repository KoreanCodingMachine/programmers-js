function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      answer.push(sum);
    }
  }
  answer.sort((a, b) => {
    return a - b;
  });

  let new_arr = answer.filter((a, i) => {
    return answer[i] !== answer[i + 1];
  });

  return new_arr;
}

arr1 = [2, 1, 3, 4, 1];
arr2 = [5, 0, 2, 7];

console.log(solution(arr1));
console.log(solution(arr2));

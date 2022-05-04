// array가 주어졌을때
// commands의 1번째 인덱스부터 2번째 인덱스까지 자르고
// 정렬했을때 3번째 인덱스의 수를 리턴하는 함수

// 나의 접근 방식
// 배열을 자르기 위해 slice 함수를 이용

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let new_array = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => {
        return a - b;
      });
    // console.log(new_array);
    answer.push(new_array[commands[i][2] - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

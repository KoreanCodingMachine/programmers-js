// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가
// 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로
// 배열에 담아서 return 하도록
// solution 함수를 완성해주세요.

/*
접근방식
로또가 당첨될 최고의 경우의수(0을 포함한)와 최소의 경우의수를 저장할 변수를 선언
indexOf() 메서드를 이용해 lottos 와 win_nums가 일치하는 수 -> min
min + 0의 개수를 -> max에 담아서 return

*/

function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  let zero_count = 0;
  let max = 0;
  let min = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      count++;
    }
    if (lottos[i] === 0) {
      zero_count++;
    }
  }

  if (count <= 1) {
    min = 6;
  } else {
    min = 7 - count;
  }

  if (zero_count === 6) {
    max = 1;
  } else {
    max = min - zero_count; // 당첨 번호에 0번이 있을때
  }
  answer.push(max, min);
  return answer;
}

let lottos1 = [44, 1, 0, 0, 31, 25];
let lottos2 = [0, 0, 0, 0, 0, 0];
let lottos3 = [45, 4, 35, 20, 3, 9];

let win_nums1 = [31, 10, 45, 1, 6, 19];
let win_nums2 = [38, 19, 20, 40, 15, 25];
let win_nums3 = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos1, win_nums1));
console.log(solution(lottos2, win_nums2));
console.log(solution(lottos3, win_nums3));

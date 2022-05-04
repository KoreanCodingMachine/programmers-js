// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
//  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

/*
접근방식
-> 반복문을 배열의 길이만큼 순회하면서
-> signs의 값이 true이면 + false이면 -를 주는 조건문을 삽입한후
-> sum이라는 변수에 값을 누산한다.
*/

function solution(absolutes, signs) {
  var answer = 123456789;
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum += -1 * absolutes[i];
    }
  }
  return sum;
}

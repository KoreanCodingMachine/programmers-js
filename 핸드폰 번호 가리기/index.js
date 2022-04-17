// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수,
// solution을 완성해주세요.

// function solution(phone_number) {
//   let arr = phone_number.split('');
//   let arr2 = arr.splice(-4, 4);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = '*';
//   }
//   let new_array = arr.concat(arr2);
//   let answer = new_array.join('');
//   console.log(answer);
//   return answer;
// }

// solution('01033334444');

//1. 문자열을 배열로 담고 싶을때 -> split()
//2. 배열에 관련된 여러 메소드들로 문자열에 정의할 값을 정해놓고
//3. 그 값을 다시 문자열로 치환을 해주면

//split()

const arr = 'apple,banana,chocolate';
const arr2 = arr.split('');
console.log(arr2);

console.log('abc'.repeat(2));

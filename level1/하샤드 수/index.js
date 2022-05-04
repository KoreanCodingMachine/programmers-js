// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// function solution(x) {
//   let sum = 0;
//   const str = x.toString();
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   if (x % sum === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// arr.reduce(callback[, initialValue])
// 매개변수
// 1. callback 다음의 네 가지 인수를 받는다
// - totalValue: 콜백의 반환값(축적된 총 값)
// - currentValue: 현재 배열 내 처리되고 있는 요소
// - currentIndex(Optional): 현재 배열 내 처리되고 있는 요소의 인덱스
// - array(Optional): reduce 호출에 사용되는 원 배열
// 2. initialValue(Optional): 콜백의 첫 번째 인수의 값에 사용되는 디폴트 값

// let arr = [13, 63, 29, 57];
// 배열의 총 합 구하기
// let sum = arr.reduce((total, val, idx, array) => {
//   console.log(total);
//   console.log(val);
//   console.log(idx);
//   console.log(array);
//   return total + val;
// }, 0);

// console.log(sum);

//배열의 최대값 최소값 구하기
// let arr = [13, 63, 29, 57];
// let isMaxNum = arr.reduce((total, val) => {
//   console.log('total:' + total);
//   console.log('val:' + val);
//   if (total > val) {
//     return total;
//   } else {
//     return val;
//   }
// });
// console.log('----------------------------------');
// let isMinNum = arr.reduce((total, val) => {
//   console.log('total' + total);
//   console.log('val' + val);
//   if (total > val) {
//     return val;
//   } else;
//   return total;
// });

//reduce , map 함수 비교하기
// let data = [1, 2, 3];

// let datas = data.reduce((total, val) => {
//   console.log(total);
//   total.push(val * 2);
//   return total;
// }, []);

// console.log(datas);

// let doublemap = data.map((el) => el * 2);
// console.log(doublemap);

//reduce와 filter을 이용해서 홀수 요소를 갖는 배열
// let data = [1, 2, 3, 4, 5, 6];

// let odds = data.reduce((total, val) => {
//   if (val % 2) {
//     total.push(val);
//   }
//   return total;
// }, []);

// console.log(odds);

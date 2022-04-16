//concat() -> 요소를 합쳐준다.

// let a = [1, 2, 3, 4, 5];
// let b = a.concat(3);
// console.log(a); // [1,2,3,4,5] -> 기존의 값은 유지됨
// console.log(b); // [1,2,3,4,5,3]

// let a = [1, 2, 3, 4, 5];

// let b = a.join();
// console.log(b);

// let c = a.join('-');
// console.log(c);

// let d = a.join('');
// console.log(d);

//arr.indexOf(searchElement[, fromIndex])
//searchElement -> 찾으려는 값
//fromIndex -> 검색을 시작할 인덱스 , default 0
//searchElement와 정확하게 일치하는 첫번째 값 return, 없으면 -1 return

//arr.slice(begin,end)
//begin -> 자르기 시작할 인덱스값
//end -> 잘라낼 배열의 종료 index
// let a = [1, 2, 3, 4, 5];
// console.log(a.slice()); // [1,2,3,4,5]
// console.log(a.slice(2, 4)); // [3,4]
// console.log(a.slice(4)); // [5]
// console.log(a.slice(1, 4)); // [2,3,4]

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// start -> 시작순서
// delectCoount -> 제거개수
// insertValue -> 값을 몇개 넣어라
// return으로 잘라낸 배열이 나옴

// let arr = [0, 1, 2, 3];
//console.log(arr.splice(1, 2)); // [0,3]
// console.log(arr.splice(1, 1)); // [1]
// console.log(arr); // [0,2,3]

// let b = arr.splice(0, 2, 3, 3);
// console.log(b);

// let new_array = Array.from([1, 2, 3, 4, 5]);
// console.log(new_array);

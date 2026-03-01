/*
  전 내용 복습
  push(): 뒤에 삽입
  pop(): 뒤에 삭제
  unshift(): 앞에 삽입
  shift(): 앞에 삭제
*/

// 1) arr.splice(n, m): n부터 시작해서 m개 지우기
let arr = [1, 3, 5, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 3, 4]

// arr.splice(n, m, x): 특정 요소 지우고 그 자리에 x "추가"
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(1, 2, 100);
console.log(arr2); // [ 'a', 100, 'd', 'e' ]

let arr3 = ['나는', '철수', '입니다.'];
arr3.splice(1, 0, '짱구친구 '); // * 두번째 매개변수가 0 이라면 아무것도 지우지 않아요
console.log(arr3); // [ '나는', '짱구친구 ', '철수', '입니다.' ]

// arr.splice(): 삭제된 요소 반환
let arr4 = [1, 2, 3, 54, 2];
console.log(arr4.splice(2, 3)); // [ 3, 54, 2 ]

// 2️) arr.slice(n, m): n부터 m 전까지 반환
let arr5 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr5.slice(1, 3)); // [ 'b', 'c' ]

// 3️) arr.concat(arr1, arr2 ...) : 합쳐서 새로운 배열 반환
arr5.concat(arr2, arr3);
console.log(arr5); // 원본은 그대로 유지
console.log(arr5.concat(arr2, arr3));

// 4️) arr.forEach(fn): 배열 반복
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((item, index, arr) => { // 요소, 인덱스, 배열

});

users.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`); 
});
// 1. Mike
// 2. Tom
// 3. Jane

// 5️) arr.indexOf / arr.lastIndexOf
let numbers = [1, 2, 3, 4, 5, 6, 3];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(3, 3)); // 6 - 매개변수가 2개인 경우 두번째 값은 해당 위치부터 탐색하라는 뜻이에요
console.log(numbers.lastIndexOf(3)); // 6

// 6) arr.includes(): 포함하고 있는지 확인

// 7) arr.find(fn), arr.findIndex(fn)
// 첫번째 true 값만 반환하고 끝, 만약 없으면 undefined 반환
const result = numbers.find((item) => {
  return item % 2 === 0;
});
console.log(result); // 2

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 15 },
  { name: 'Mark', age: 17 },
]

const isStudent = userList.find((user) => {
  return user.age < 20; 
});
console.log(isStudent); // { name: 'Jane', age: 15 }

const isStudentIndex = userList.findIndex((user) => {
  return user.age < 20; 
});
console.log(isStudentIndex);

// 8) arr.filter(fn): 만족하는 모든 요소를 새로운 배열로 반환
const filerResult = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(filerResult); // [ 2, 4, 6 ]

// 9) arr.reverse(): 역순으로 재정렬
numbers.reverse();
console.log(numbers); // [3, 6, 5, 4, 3, 2, 1]

// ⭐⭐ 10) arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let mapResult = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19
  })
});
console.log(mapResult);
console.log(userList);

// 11) join : 배열의 요소를 합친다.
let introduce = ['안녕', '나는', '철수야'];
let joinResult = introduce.join();
console.log(joinResult); // 안녕,나는,철수야 - 매개변수 미작성시 ,(쉼표)로 이어줌

let joinResult2 = introduce.join(' ');
console.log(joinResult2); // 안녕 나는 철수야

// 12) split: 구분자 기준으로 나눠서 배열로 반환
const userList1 = "Mike,Jane,Tom,Tony";
let str = 'Hello, My name is Mike';
const splitResult = userList1.split(',');
console.log(splitResult); // [ 'Mike', 'Jane', 'Tom', 'Tony' ]

// 13) Array.isArray(): 배열인지 확인함
console.log(Array.isArray(splitResult)); // true
console.log(Array.isArray(joinResult)); // false
// 1) arr.sort(): 배열 재정렬, 배열 자체가 변경되니 주의!
let arr = [1, 3, 5, 2, 4];
arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

let str = ['a', 'c', 'f', 'e', 'b'];
str.sort();
console.log(str); // [ 'a', 'b', 'c', 'e', 'f' ]

// **
let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2); // [ 13, 27, 5, 8 ]
// sort() 는 배열을 문자로 취급하기 때문이다. 13의 1, 27의 2 그리고 5, 8 을 비교하게 되는 것이다.
// 그렇다면 우리가 원하는 대로 배열을 정렬시키려면 어떻게 해야할까?

// 인수로 정렬 로직을 담은 함수를 받는 것이다.
arr2.sort((a, b) => {
  return a - b;
});
console.log(arr2); // [ 5, 8, 13, 27 ]

// ⭐ Lodash 라이브러리 https://lodash.com/

// 2) arr.reduce(): 배열의 각 요소에 콜백 함수를 적용하여 모든 요소를 하나의 누적된 결과값으로 줄여(reduce) 반환하는 메서드
// 인수로 함수를 받음. (누적 계산값, 현재 값) -> { return 계산값 }, 초기값;

let nums = [1, 2, 3, 4, 5];
// let result = 0;
// nums.forEach((num) => {
//   result += num;
// });
// console.log(result); // 15

// 이 위의 작업을 한 번에 처리해주는 것이 reduce();

const result = nums.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(result); // 15

// 성인만 추출해서 새로운 배열 반환해보기
let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 15 },
  { name: 'Mark', age: 17 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 25 },
];

const adults = userList.reduce((prev, cur) => {
  if(cur.age > 19) {
    prev.push(cur.name);
  } 
  return prev;
}, []);
console.log(adults); // [ 'Mike', 'Sue', 'Harry' ]

// 나이의 총 합 구하기
const totalAge = userList.reduce((prev, cur) => {
  return prev + cur.age;
}, 0);
// ❓여기서  return prev.age + cur.age; 가 아닌 이유
// prev 는 객체아니라 지금까지 계산된 "숫자 합계" 그 자체이기 때문이다.
console.log(totalAge);

// 이름이 4글자인 사람만 반환하기
const specific = userList.reduce((prev, cur) => {
  if(cur.name.length === 4) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(specific); // [ 'Mike', 'Jane', 'Mark' ]
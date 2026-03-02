/*
  구조분해할당
  - 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
*/

// 1. 배열 구조 분해 예시
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log(user1); // Mike
console.log(user2);
console.log(user3); 
// 이 원리는 let user1 = users[0], let user2 = users[1], let user3 = users[2] 를 의미해요

// 1) split 을 활용한 배열 구조 분해 할당
let str = 'Hi-I-am-JEH';
let [word1, word2, word3, word4, word5] = str.split('-');
console.log(word1); // Hi
console.log(word2); 
console.log(word3); 
console.log(word4); 
console.log(word5); // undefined - 할당되는 값이 없으면 undefined 가 돼요

// 2) undefined 를 예방하기 위해서 기본값을 설정할 수 있어요
let [a, b=3, c=3] = [1, 2];
console.log(c); // 3
console.log(b); // 2 - 구조분해할당이 이루어지는 값은 기본값 부여에 영향을 미치지 않고 구조분해할당값을 유지해요'


// 3) 일부 반환값 무시
let [num1, , num3] = [1, 2, 3, 4];
console.log(num1); // 1
console.log(num3); // 3
// 2는 무시됌

// 4) 바꿔치기
// 기존에는 두 변수의 값을 바꿔치기할려면 임시 변수가 필요했는데 구조분해할당은 이를 간편하게 해줘요
let [d, e] = ['e', 'd'];
console.log(d); // e
console.log(e); // d

// 2. 객체 구조 분해
let user = { 
  name: 'jeh',
  age: 30
}

// let { name, age } = user;
// let { age, name } = user; // 1) 순서를 바꿔도 동일하게 동작해요
// console.log(name);
// console.log(age);

// 2) 새로운 변수 이름으로도 할당가능해요
let { age: userAge, name: userName } = user; 
// console.log(age);
console.log(userAge); // 30

// 3) 기본값 부여가 가능해요
let order = {
  id: 1,
  name: '주문1'
}

let { id, name, quantity=3 } = order;
console.log(quantity); // 3



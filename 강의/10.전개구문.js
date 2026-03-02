// 전개 구문(Spread Syntax)

// 1. 배열에서의 전개 구문 사용
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = [...arr1, ...arr2];
// ...arr1 = [1, 2, 3,] , ...arr2 = [4, 5, 6] 을 의미
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// 중간에 활용하는 것도 가능
let newArr2 = [0, ...arr1, ...arr2, 7, 8];
console.log(newArr2);

// arr.push(), arr.splice() .. 등의 복잡한 배열 메서드를 쓰지 않아도 된다

// 2. 객체에서의 전개 구문 사용
let user = { name: 'Mike', age: 30 };
let user2 = {...user};
user2.name = 'Jane';
console.log(user.name); // Mike - 서로의 값에 영향 미치지 않는다.
console.log(user2.name); // Jane
// Object.assign() 을 쓰지 않아도 된다.

/*******
 * arr3을 [4, 5, 6, 1, 2, 3] 으로
 */
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6]; 
arr3 = [...arr4, ...arr3];
console.log(arr3);

/********
 * lang, fe 배열을 추가한 me 객체 새로 만들기
 */
let me = { name: 'JEH' };
let info = { age: 30 };
let lang = ["Korean", 'English'];
let fe = ['JS', 'React'];

// * 전개구문을 쓰지 않는 다면 ?
// me = Object.assign({}, me, info, {
//   skills: []
// });

// lang.forEach(item => {
//   me.skills.push(item);
// });

// fe.forEach(item => {
//   me.skills.push(item);
// });
// console.log(me);

// 전개 구문을 쓴다면 간단하게 처리할 수 있다.
me = {
  ...me,
  ...info,
  skills: [...lang, ...fe]
};

console.log(me);
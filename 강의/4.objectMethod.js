// 1️⃣ Object.assign(): 객체 복제
const user = {
  name: 'Mike',
  age: 30
}

const cloneUser = user; // XX 객체 자체의 복사가 아닌 참조값 복사
// 여기서 cloneUser의 속성값을 바꾸면 user 의 속성값도 따라 바뀝니다. => 서로 같은 참조값을 바라보고 있기 때문이에요.
console.log(user === cloneUser); // true

const newUser = Object.assign({}, user); // 첫번째 매개변수: 초기값, 두번째 매개변수부터 들어오는 값들이 초기값에 병합되는 구조에요
// {} + { name: 'Mike', age: 30 } = { name: 'Mike', age: 30 }

newUser.name = 'Jenny';
console.log(newUser.name);
console.log(user.name); // Mike. (서로 독립적인 객체이기 때문이다.)
console.log(user === newUser); // false

// 만약 초기값에 해당 객체가 가지고 있지 않은 프로퍼티가 있으면 어떻게 될까요 ?
const newUser2 = Object.assign({ gender: 'M'}, user);

console.log(newUser2); // { gender: 'M', name: 'Mike', age: 30 }
// * 새로운 속성이 자동 추가가 돼요

// 2️⃣ -1 ) Object.keys(): 키를 배열로 반환해요, Object.values(): 값을 배열로 반환해요
console.log('=== Object.keys() ===');
const keyArr = Object.keys(newUser2);
const valueArr = Object.values(newUser2);
console.log(keyArr); // [ 'gender', 'name', 'age' ]
console.log(valueArr); // [ 'M', 'Mike', 30 ]

// 2️⃣ -2 ) Object.entries(): 키, 값을 쌍으로 배열로 반환해요
const entryArr = Object.entries(newUser2);
console.log(entryArr); // [ [ 'gender', 'M' ], [ 'name', 'Mike' ], [ 'age', 30 ] ] - 배열내에 각 키, 값이 또 배열로 들어가요

// 2️⃣ -3 ) Object.fromEntries(): 키, 값의 배열을 객체로 반환해요. (2-2와 반대)
const arr = [
  [ 'gender', 'M' ], 
  [ 'name', 'Mike' ],
  [ 'age', 30 ]
];
console.log(Object.fromEntries(arr)); // { gender: 'M', name: 'Mike', age: 30 }


// ==== 실습 ==== 
console.log('=== 실습 ===');
let n = 'name';
let a = 'age';

const me = {
  [n]: 'JEH',
  [a]: 30,
  ["my" + "height"]: 162
};
console.log(me);

// 두개의 매개변수로 객체를 만드는 함수를 만들어볼게요
function makeObj(key, value) {
  return {
    [key]: value
  }
}
const obj = makeObj('age', 30);
console.log(obj);

// 객체의 복사
const twin = Object.assign({}, me);
console.log("=twin 정보=");
console.log(twin);
twin.name = 'jjj';
console.log(me.name);
console.log(twin.name); // 참조값 복사가 아닌 객체 자체의 복사가 이루어졌기 때문에 서로의 값 변경에 독립적이에요

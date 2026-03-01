let a = 'age';
const user = {
  name: 'Mike',
  [a] : 30
}
// [a] 를 computed property 라고 불러요
console.log(user);

const user2 = {
  [1+4]: 5,
  ["안녕" + "하세요"]: "Hello"
}
// 변수 뿐만 아니라 수식자체를 넣는 것도 가능해요
console.log(user2);
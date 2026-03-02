// 나머지 매개변수
function showName(name) {
  console.log(name);
}
showName('Mike');
showName('Mike', 'JEH'); // Mike
// JS에서는 인수로 넘기는 개수의 제한이 없음
showName(); // undefined

// 함수의 인수를 얻는 방법은 두가지가 있어요
// 1) Arguments
// - 함수로 넘어 온 모든 인수에 접근
// - 함수내에서 이용가능한 지역 변수
// - Array 형태의 객체로 length/index 사용가능하지만 배열의 내장 메서드는 없음(forEach, map)
function getName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
}
getName('name1', 'name2'); 
// 2
// name1


// 2) 나머지 매개 변수 사용 - ES6 이후의 환경에서는 나머지 매개변수 사용을 권장
// 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게 한다.
function getName2(...names) { // ...배열명 으로 표현
  console.log(names);
}
getName2(); // []
getName2('Jenny'); // [ 'Jenny' ]
getName2('Jenny', 'Lisa'); // [ 'Jenny', 'Lisa' ]

/**********************
 * 예제
 */
// 1) 매개변수로 들어오는 모든 값을 더해야하는 경우

// function add(...numbers) {
//   let total = 0;
//   numbers.forEach(num => {
//     total += num;
//   })
//   console.log(total);
// }

function add(...numbers) {
  let total = numbers.reduce((prev, cur) => {
    return prev + cur;
  }, 0)
  console.log(total);
}
add(1, 2, 3); 
add(1, 2, 3, 5, 10, 11);

// User 객체를 만들어주는 생성자 함수 만들기
function User(name, age, ...skills) { // 나머지 매개변수는 항상 마지막 위치에 !!
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 30, 'js', 'React');
console.log(user1);
console.log(user2);

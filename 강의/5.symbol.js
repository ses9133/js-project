// propery key 는 문자형과 1️⃣ Symbol 형이 가능해요
// ★ 특이한 점은 new 를 붙이지 않으며, 유일한 식별자에요
const a = Symbol();
const b = Symbol();
console.log(a); // Symbol()
console.log(b); // Symbol()
// 출력시 값은 똑같아 보이나
console.log(a == b); // false
console.log(a === b); // false
// 자료형, 내용값 모두 다 다른 것을 알 수 있어요 

// 매개변수에 값을 넣어 만들 수도 있어요. 하지만 똑같은 문자가 들어가도 두 변수는 일치하지 않으며 유일성이 보장돼요
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(id == id2); // false
console.log(id === id2); // false

// 이제 이 Symbol()을 객체의 키로 활용해볼게요
const user = {
  name: 'Mike',
  age: 30,
  [id]: 'myId'
};
console.log(user); // { name: 'Mike', age: 30, Symbol(id): 'myId' }

// 그런데 Object 메서드 사용시 Symbol() 객체는 무시해요
console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'Mike', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]

// 또한 for-in 반복문에서도 건너뛰어요
for(let a in user) {
  console.log(a); // name, age
}

// 2️⃣ Symbol.for(): 전역 심볼
/*
  - "하나"의 심볼만 보장받을 수 있어요. 없으면 만들고, 있으면 기존껄 쓰기 때문이에요
  - Symbol() 함수는 매번 다른 Symbol 값을 생성하지만,
  - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 을 "공유" 해요
*/
const key1 = Symbol.for('key');
const key2 = Symbol.for('key');
console.log(key1 == key2); // true
console.log(key1 === key2); // true

// Symbol의 이름을 추출하고 싶다면 Symbol.keyFor(변수명) 를 사용해요
console.log(Symbol.keyFor(key2)); // key

// cf) 전역심볼이 아닌 심볼은 Symbol.keyFor()는 사용할 수 없고,
// 객체명.description 을 사용해요
console.log(id.description); // id

// 3️⃣ 숨겨진 Symbol key 보는 법
// 앞서, Object 메서드와 for-in 반복문에서도 symbol 변수는 건너뛴다고 했는데요
// 확인할 수 있는 방법에 대해 알아볼게요
const hidden = Object.getOwnPropertySymbols(user);
console.log(hidden); // [ Symbol(id) ]

// Reflect.ownKeys(객체명); : 객체의 Symbol형을 포함한 모든 key 를 배열로 반환해요
const hiddenKey = Reflect.ownKeys(user);
console.log(hiddenKey); // [ 'name', 'age', Symbol(id) ]

// Symbol을 쓰면 다른 개발자가 만들어놓은 객체에 해당 프로퍼티가 있나 신경쓰지 않아도 되고,
// 기존의 객체에 프로퍼티를 덮어 쓸 위험도 없기 때문에 이런 점들이 Symbol을 쓰는 이유라고 한다.
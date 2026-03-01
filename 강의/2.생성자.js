// 생성자 함수: 상품 객체를 생성해보자

// 생성자 함수의 함수명은 대문자로 시작함
function Item(title, price) {
  // this = {}; (new 로 호출하면 자동 실행됨)
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`가격은 ${price}원입니다.`);
  }
  // return this; (new 로 호출하면 자동 실행됨)
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 1000); // TypeError: Cannot read properties of undefined (reading 'showPrice'), 생성자 함수는 반드시 new 를 사용해줘야함.
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);

item1.showPrice();
item2.showPrice();
item3.showPrice();

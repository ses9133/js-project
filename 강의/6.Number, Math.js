// toString()
let num = 10;
console.log(num.toString()); // 10
console.log(num.toString(2)); // 1010, 매개변수 숫자의 진법으로 변환됨

let num2 = 255;
console.log(num2.toString(16)); // ff

// Math
console.log(Math.PI); // 3.14...

// Math.ceil: 소수점 올림
let num3 = 1.3;
let num4 = 1.6;
console.log(Math.ceil(num3));
console.log(Math.ceil(num4));

// Math.floor: 소수점 내림
// Math.round: 반올림

// 소수점 자릿수
// 요구사항: 소수점 셋째자리에서 반올림해주세요
let userRate = 30.1234;
console.log(Math.round(userRate * 100) / 100); // 30.12
// 혹은 toFixed() 사용: string 반환
console.log(userRate.toFixed(2)); // 30.12
console.log(typeof(userRate.toFixed(2))); // string

// 기준 소수점보다 더 많은 자리 숫자를 입력하면 해당 부분은 0 으로 채움
console.log(userRate.toFixed(6)); // 30.123400

// isNaN()
let x = Number('x');
console.log(isNaN(x)); // true
/**
 *  숫자가 아닌지 판별하는 함수는 오직 isNaN 밖에 없음
 * x == NaN (false)
 * x === NaN (false)
 * NaN == NaN (false)
 */

// parseInt()
// Number()와 다른 점은 Number는 오직 숫자로 바꿀수있는 문자만 존재해야한다면,
// parseInt()는 숫자로 읽을 수 있는 부분까지만 읽어준다.
let margin = '10px';
console.log(parseInt(margin)); // 10
console.log(Number(margin)); // NaN

let redColor = 'f3';
console.log(parseInt(redColor)); // NaN

// 두번째 매개변수에 '첫 번째 매개변수를 몇진수로 해석할 것인가?' 를 명시하면 
// 적용하여 10진수의 결과를 나타내줌.
console.log(parseInt(redColor, 16)); // 243
console.log(parseInt('11', 2)); // 3

// parseFloat()
let padding = '18.5%';
console.log(parseInt(padding)); // 18
console.log(parseFloat(padding)); // 18.5

// Math.random(): 0 ~ 1 사이 무작위 숫자 생성
// Math.min(), Math.max(), Math.abs()

// Math.pow(n, m) : n의 m 제곱 반환
console.log(Math.pow(2, 10)); // 1024

// Math.sqrt(): 제곱근
console.log(Math.sqrt(16)); // 4
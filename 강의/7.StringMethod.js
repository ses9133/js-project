// str.substring(n,m): n과 m 사이의 문자열
let example = 'abcdefg';
console.log(example.substring(2, 5)); // cde

// str.substr(n, m): n 부터 시작해서 m 개의 문자가지고옴
console.log(example.substr(2, 5)); // cdefg

// 예제
// 금칙어 콜라를 판별하는 함수 만들기
function hasCola(str) {
  if(str.indexOf("콜라") > -1) {
    console.log('금칙어가 포함되어있습니다.');
  } else {
    console.log('금칙어가 없습니다.');
  }
}

hasCola('콜라에요');
hasCola('콜..');
hasCola('사이다최고');
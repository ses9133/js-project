// 인테리어 담당 (ui.js): 글자를 화면에 어떻게 뿌릴지(DOM 조작) 결정하는 파일

// HTML 요소를 찾고(querySelector), 내용을 바꾸는 함수만 만듦
export function changeQuote(message) {
  const content = document.querySelector('.content-body');
  content.textContent = message;
};
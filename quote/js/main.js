// main.js: "버튼 눌리면 창고(data.js)에서 하나 꺼내서 인테리어 담당한테 줘!"라고 시키는 파일

import { quotes } from "./data.js";
import { changeQuote } from "./ui.js";

/*

가져온 quotes 배열에서 **랜덤한 번호(인덱스)**를 하나 뽑는다. (Math.random 사용)

그 번호를 사용해 배열에서 문구 하나를 선택한다.

선택된 문구를 ui.js에서 만든 화면 변경 함수의 재료(인자)로 넘겨준다
*/
document.addEventListener('DOMContentLoaded', () => {
  let random = Math.floor(Math.random() * quotes.length); // 0 이상 quotes 배열길이 미만

  changeQuote(quotes[random]); 
});

const changeBtn = document.querySelector('.change-btn');
changeBtn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length); // 0 이상 quotes 배열길이 미만

  changeQuote(quotes[random]); 
});


// // 문제16: 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력
// 입력 : 거꾸로
// 출력 : 로꾸거

// 박누리 답안
let text = prompt("문장을 입력하세요. 거꾸로 출력됩니다");
// let text = "가나다라";
// let resultText = "";
// // 이 for문이 안돌아요..ㅠ
// for (let i = text.length - 1; i == 0; i--) {
//   console.log(text[i]);
//   resultText = resultText + text[i];
//   // console.log(text.length);
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(text[i]);
//   // i--;
//   // console.log(i);
// }
console.log(text.split("").reverse().join(""));
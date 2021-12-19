// // 문제13 : 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력

// 입력 : 1
// 출력 : 수성

// 박누리 답안
let n = prompt("숫자를 입력하세요.");
const planet = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
console.log(planet[n - 1]);

// 안소현 답안
// let order = prompt('태양계 몇 번째 행성을 알고 싶으신 가요?');
// const SOLAR_SYSTEM = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

// console.log(SOLAR_SYSTEM[order - 1]);


// 이승연 답안
// const planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
// const n = prompt('몇 번째 행성인가요?');
// console.log(planets[n-1]);

//김초연 답안
// const planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// function planetCounter(i) {
//     if( Number.isInteger(i) && 0 < i < 9 ) {
//         console.log(planet[i-1]);
//     } else {
//         console.log('잘못된 입력값입니다.')
//     }
// }
// planetCounter(1);

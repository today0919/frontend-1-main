// 스크립트

// 선택자
// id 선택자
document.getElementById("id");
// class 선택자
document.getElementsByClassName("class");
// tag 선택자
document.getElementsByTagName("tag");

// query 선택자
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("tag");

// 변수 선언

// let : 재할당 가능
let a = 1;
console.log(a);

a = 2;
console.log(a);

// const : 재할당 불가능
const b = 3;
console.log(b); // 3

// b = 4;
console.log(b); // Uncaught TypeError: Assignment to constant variable.

// 객체 선언
const obj = {
  left: "0",
  top: "0",
  // backgroundColor: "red",
  "background-color": "red",
};

// 산술 연산자
console.log(1 + 2); // 3
console.log(6 % 6); // 0

// 조건문

// if (조건) {
//   // 조건이 참일 때 실행될 코드
// } else {
//   // 조건이 거짓일 때 실행될 코드
// }

let c = 2;
if (c === 1) {
  console.log("참");
} else {
  console.log("거짓");
}

// 함수 선언
function 함수명() {
  // 실행될 코드
}
// 함수 호출
함수명();

// 이벤트
// 도큐먼트가 준비가 되면 실행

$(document).ready(function () {
  document.querySelector("button").addEventListener("click", function () {
    console.log("클릭");

    // .box를 숨기기
    $(".box").hide();
  });
});

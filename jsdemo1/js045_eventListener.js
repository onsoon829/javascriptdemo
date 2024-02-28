let btn = document.querySelector("button");

// btn.onclick = () => {
//   alert("click1");
// };

// btn.onclick = () => {
//   alert("click2");
// };
//하나의 객체에 두 개 이상의 이벤트를 걸 수 없다. 위에 써놓고 밑에 또 써놓으면 밑에 게 출력된다.

function click1() {
  alert("click1");
} //alert: 경고창 띄우기

function click2() {
  alert("click2");
}

//btn.addEventListener('이벤트', 함수, 이벤트 전파)
//이벤트 전파=> true: capturing, false: bubbling
// ① 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
// ② 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파
btn.addEventListener("click", click1, false); //false로 하면 버블링, true로 하면 버블링
btn.addEventListener("click", click2, false);
//addEventListener: "실행할 행위", 실행할 함수.

let totalCar = document.getElementById("total");
//HTML에서 id가 total인 요소를 찾아가서 가져온다. 총합을 표시할 input 엘리먼트이다.

let chbCnt = document.querySelectorAll('tbody input[typㄷe="checkbox"]'); //tbody 내부에서 input 태그중 타입이 checkbox인 모든 엘리먼트 선택.
console.log(chbCnt); //NodeList
//이때 NodeList가 Array로 변환된다.
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()을 등록
myChb.map((element) => {
  //window
  //console.log(this);
  //myChb 배열의 각 요소에 대해 반복하면서, 각 체크박스 엘리먼트에 onclick 이벤트 리스너를 등록합니다. 이 때, 이벤트 핸들러로는 carCount 함수를 사용한다.
  //map: 특정숫자ㅏ를 곱하는 등 요소에 어떤 변경사항을 적용하는데 사용.
  element.onclick = carCount;
});

function carCount() {
  //체크박스가 클릭될 때 호출되는 함수.
  //this는 현재 이벤트가 발생된 checkbox 객체를 나타냄
  //console.log(this);
  //console.log(this.id);

  /*defaultValue는 <input>에 초기에 입력된 value의 값을   기억해 가져온다.*/
  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
} //변경된 총합을 화면에 반영하기 위해 totalCar.value에 값 설정.

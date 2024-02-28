document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + " " + optFruit.value;
  console.log(`${optSelect}`);

  return false;
};
//onsubmit: 양식 제출 이벤트가 발생할 때의 동작을 지정한다.

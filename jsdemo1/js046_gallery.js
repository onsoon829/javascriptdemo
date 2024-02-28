//(1) 작은 이미지를 클릭하면 큰 이미지 보이게.

let bigPhoto = document.querySelector("#photo > img");
console.log(bigPhoto);

let list_zone = document.querySelector("#inner_list");
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8)//ul-li변수에는 작은 이미지를 담고 있는 각각의 li요소가 포함된 HTMLCollection이 할당.
//HTMLCollection: 요소의 문서 내 순서대로 정렬된 일반 컬렉션을 나타내며, 리스트에서 선택할 때 필요한 메서드와 속성을 제공한다.

//Array <= HTMLCollection
ul_li = [...ul_li]; //ul_li = Array.from(ul_li);

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector("a");
  aTag.onclick = (e) => {
    bigPhoto.src = aTag.href;
    return false; //e.preventDefault);
  };
});

//(2)다음(>)버튼을 클릭할때마다 <li>이 100만큼 이동하게 한다.
let m_num = 0; //현재 리스트 위치 나타냄
let b_btn = document.querySelector("#next_btn");

b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + "px";

  return false; // e.preventDefault();
};

//(3)다음(<)버튼을 클릭할때마다 <li>이 100만큼 이동하게 한다.
let before_btn = document.querySelector("#before_btn");
before_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * num + "px";
  return false; // e.preventDefault();
};

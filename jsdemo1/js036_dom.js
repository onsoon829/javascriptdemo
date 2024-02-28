let myNode = document.querySelector("#p2");

//parentNOde: 부모
let ptNode = myNode.parentNode;
//<div id = 'wrap'></div>
console.log(ptNode);

//[object HTMLDivElement]
console.log(`${ptNode}`);
///////////////////////////////////////
//previousSibling
let prevNode = myNode.previousSibling;
console.log(prevNode);

prevNode = prevNode.previousSibling; // #text //공백을 의미한다.
console.log(prevNode); //<p id="p1"><content1</p>
////////////////////
//nectSibling
let nextNode = myNode.nextSibling;
//[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//[object HTMLParagraphElement], contnet3
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

///////////////////////////////////////
//previousElementSilbling
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerNext}`);

//////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode:${nextEleNode}, ${nextEleNode.innerText}`);

/////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//divChildesNode:[object NodeList]
console.log(`divChlidesNode:${divChildesNode}`);
//NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChildesNode);

//////////////////////////////////////
//children
let divChildren = divNode.children;
//deivChildren"[object HTMLCollection]
console.log(`divChildren:#{divChildren}`);
//HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem("p1"));

///////////////////////////////
//firstChild,  firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

///////////////////////////////
//객체.getAttibute("속성명"),  객체.setAttribute("속성명","값")
//객체.속성명 , 객체.속성명="값"
let aAttrNode = aNode.getAttribute("src");
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute("title", "스타배우");

//스타배우
console.log(aNode.getAttribute("title"));

aNode.id = "imgGosu";
//imgGosu
console.log(aNode.id);

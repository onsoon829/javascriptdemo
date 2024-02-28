const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push("Melon")); //6
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

1
function getArrayStr(Array) {
  return Array.sort();
}
console.log(getArrayStr(["bbbb", "aaaa", "ddddd", "ccccc"]));

2

function getArrayNums(Array) {
  return Array.sort((a,b)=> a-b);
}
console.log(getArrayNums([9, 20, 5, 80, 1]));

3

function getArrayNum2(Array) {
  return Array.sort((a, b) => b - a);
}

console.log(getArrayNum2([8, 10, 7, 32, 400]));

4

let inputNames = document.createElement("input");
document.body.append(inputNames);
let btnSent = document.createElement("button");
document.body.append(btnSent);
btnSent.innerText = "sent";
btnSent.addEventListener("click", pushNamesinArray);
let counter = 0;
let Array1 = [];
function pushNamesinArray() {
  Array1.push(inputNames.value);
  inputNames.value = "";
  counter++;
  if ( Array1.length == 10) {
    return console.log(Array1.sort());
  }
}


5


function ranAgeArray (){
let Arrayage = []
for (let i = 0; i<10;i++){
    let rndnumber = Math.floor(Math.random()*75)
    Arrayage.push(rndnumber)
}
return console.log(Arrayage.sort((a,b)=>b-a))
}
ranAgeArray()




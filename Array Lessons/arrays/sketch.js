let myArray = [7, "hello", 100, {a:3, b:7}, [25, 50, 75]];
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray.length);
console.log(myArray[3]);
console.log(myArray[4]);

function arrayInfo(anArray) {
    console.log(anArray.length);
    console.log(anArray[0]);
    console.log(anArray[anArray.length - 1]);
}

arrayInfo([1, 2, 3, 4, 5, "ayo"]);

function printEvens(anArray) {
    let stringArr = [];
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 === 0) {
            stringArr.push(anArray[i]);
        }
    }
    console.log(stringArr);
}

printEvens([1, 2, 3, 4, 5, 6, 8, 9, 10]);
function numberSplit(num) {
    let result = [];

    if (num % 2 === 0) {
        result.push(num / 2, num / 2);
    } else {
        result.push(Math.floor(num / 2), Math.ceil(num / 2));
    }

    return result;
}


let example1 = numberSplit(4);
console.log("numberSplit(4) - [" + example1[0] + ", " + example1[1] + "]");

let example2 = numberSplit(10);
console.log("numberSplit(10) - [" + example2[0] + ", " + example2[1] + "]");

let example3 = numberSplit(11);
console.log("numberSplit(11) - [" + example3[0] + ", " + example3[1] + "]");

let example4 = numberSplit(-9);
console.log("numberSplit(-9) - [" + example4[0] + ", " + example4[1] + "]");
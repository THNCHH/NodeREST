function totalVolume(...boxes) {
    let total = 0;
    for (let box of boxes) {
        total += box[0] * box[1] * box[2];
    }
    return total;
}


console.log(totalVolume([14, 2, 4], [13, 3, 3], [11, 1, 2], [12, 1, 1])); 
console.log(totalVolume([2, 2, 2], [2, 1, 1])); 
console.log(totalVolume([1, 1, 1])); 

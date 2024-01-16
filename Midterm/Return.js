function sumTwoSmallestNums(numbers) {
    let positiveNumbers = numbers.filter(number => number > 0);
    positiveNumbers.sort((a, b) => a - b);

    return positiveNumbers[0] + positiveNumbers[1];
}

// Examples
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); 
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); 
console.log(sumTwoSmallestNums([2, 9, 6, -1])); 
console.log(sumTwoSmallestNums([1879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); 
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); 
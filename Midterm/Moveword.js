function capToFront(s) {
    let upperCaseChars = s.split('').filter(char => char === char.toUpperCase());
    let lowerCaseChars = s.split('').filter(char => char === char.toLowerCase());
    return upperCaseChars.join('') + lowerCaseChars.join('');
}


console.log(capToFront("hApPy")); 
console.log(capToFront("moveMENT")); 
console.log(capToFront("shortCAKE"));
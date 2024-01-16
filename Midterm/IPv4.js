function isValidIP(str) {
    const parts = str.split(".");
    if (parts.length !== 4) return false;

    for (let part of parts) {
        if (!/^\d+$/.test(part)) return false; 
        const number = parseInt(part, 10);
        if (isNaN(number) || number < 0 || number > 255) return false; 
        if (part.length > 1 && part.startsWith("0")) return false; 
    }
    return true;
}

console.log(isValidIP("1.2.3.4")); 
console.log(isValidIP("1.2.3")); 
console.log(isValidIP("1.2.3.4.5")); 
console.log(isValidIP("123.45.67.89")); 
console.log(isValidIP("123.456.78.90")); 
console.log(isValidIP("123.045.067.089")); 
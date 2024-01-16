function removeDups(items) {
    let seen = new Set();
    return items.filter(item => {
        if (!seen.has(item)) {
            seen.add(item);
            return true;
        }
        return false;
    });
}

// Examples
console.log(removeDups([1, 0, 1, 0])); // [1, 0]
console.log(removeDups(["The", "big", "cat"])); // ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // ["John", "Taylor"]
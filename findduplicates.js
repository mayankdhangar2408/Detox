function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (const num of arr) {
        if (seen.has(num)) duplicates.add(num);
        else seen.add(num);
    }
    return Array.from(duplicates);
}
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3])); // [2, 3]

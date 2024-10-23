function descSorting(arr) {
    const size = arr.length;
    
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

const arr = [5, 2, 8, 1, 4];
const sortedArray = descSorting(arr);
console.log(sortedArray);

function minMax(arr) {
    arr.sort((a, b) => a - b); //sorting by ascending

    let lowest = arr[0];
    let highest = arr[arr.length - 1]; //6
    let average = arr.reduce((a, b) => a + b) / arr.length;
    return { lowest, highest, average };
}
console.log(lowest)
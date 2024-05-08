function calculate(arr1, arr2) {
    let res = []

    for (let i = 0; 1 < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }
    return res
}

let num1 = [1, 2, 3, 4, 5]
let num2 =[3, 2, 1, 4, 5]
console.log(calculate(num1, num2))
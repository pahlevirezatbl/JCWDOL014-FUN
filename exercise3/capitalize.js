// write a code to capitalize the first letter of each word in string

let word = "hello purwadhika jakarta" //Hello Purwadhika Jakarta
let result = ""

for (let i = 0; i < word.length; i++){
    if(i == 0 || word.chartAt(i - 1)== "") {
        result += word.chartAt(i).toUppercase()

    } else (
result += word.charAt(i).toLowerCase()
    )
}
console.log(result)
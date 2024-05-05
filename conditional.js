let age = 15

if (age >= 17){
    console.log('you can now create an ID Card')
} else {console.log('you area not old enough to create an ID Card')}

let grade = "B"

if (grade === "A"){
    console.log("Excellent Result!")
}else if (grade === "B"){
    console.log("Great Result!")
}else if (grade === "C"){
    console.log("Average Result!")
}else{
    console.log("Invalid Grade!")
}

let now = new Date()
let day = now.getDay() // 2

switch(day){
    case 0:
        console.log("Minggu")
        break;
    case 1:
        console.log("senin")
        break
    case 2:
        console.log("selasa")
        break
    case 3 :
        console.log("Rabu")
        break
    case 4 :
        console.log("Kamis")
        break
    case 5 :
        console.log("jumat")
        break
    default :
        console.log("sabtu")
}

let a = " "

if (a){
    console.log(true)
}else{
    console.log(false)
}

let str = "purwadhika"

console.log(str.length)

let kata = "Reza"

console.log(kata === 'javascript' ? 'javascript' : "not javascript")

console.log(grade == "A" ? "Excellent result" : grade == "B" ? "Good result" : "invalid result")
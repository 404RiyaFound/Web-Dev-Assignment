console.log('Hello from VSCode')

// print sum of 100 and 200 
console.log(100 + 200)

var name = 'priyanshi'
console.log(name)  //name' is deprecated (global variable)

var age = 20
console.log(age)

var age = 18
console.log(age) // prints both the values

let num = 67
//let num 56 // redeclaration not allowed

let agh = 56
agh = 45 // reassignment allowed

const man = 34
// const man = 90 redeclaration not allowed
// man = 60 reassignment not allowed

let psp;
// const sps; error: declarations not initialized
console.log(typeof psp)

let isPresent = true
console.log(typeof isPresent)

let nothing = null
console.log(nothing)
console.log(typeof null) // type of null returns object

console.log("Hello" + "World")
console.log(9 + "Hello") //concatenation
console.log(15 + 30)
console.log("15" + "30") //concatenation
console.log("35" - "15") //20 : type coverstion , converted to number and performing subtraction
console.log("10" - 2) // 8
console.log("10" * "2")// 20
console.log("10" / "2") //5
console.log(45 / 3 - 2 + 10 * 8 - (2 * 3)) //87
console.log("abc" - "bc") //NaN


//write a code that prints the first 10 natural numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//prints all even numbers till 20
for (let i = 2; i <= 20; i += 2) {
    if (i % 2 == 0){
        console.log(i);
    }
}

function reverseTheString(str){
    let N = str.length //index: 0 to N-1
    let ans = "";
    for(let i = N-1; i >= 0; i--){
        ans = ans + str[i];
    }
    return ans;
}
console.log(true*5)
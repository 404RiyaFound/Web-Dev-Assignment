function greet() {
    console.log("good Morning")
}

greet();

// write a function that returns sum of two numbers
function sum(num1, num2) {
    return num1 + num2
}

let ans = sum(10, 20)
console.log(ans)

console.log(sum(100, 200))

function product(num1, num2, num3) {
    console.log(num1 * num2 * num3)
}

console.log(product(20, 10, 5)) //undefined
product(10, 20, 5)


//functions as expression 
const answ = function (num1, num2, num3) {
    return (num1 * num2 * num3)
}

console.log(answ(2, 5, 8))

function greeting(username = 'Guest') {
    console.log(`Good Morning, ${username}`)
}

greeting('priyanshi')
greeting() //Good Morning, Guest

function subtraction(n1 = 45, n2 = 56) {
    console.log(n1 - n2)
}
subtraction()

function subtract(n1, n2) {
    console.log(n1 - n2)
}
subtract(56, 34)
subtract() //NaM

//functions that prints fruit color 
function checkFruit(fruitName) {
    let fruit = fruitName.toLowerCase()
    switch (fruit) {
        case "apple":
            console.log("Red Fruit")
            break;
        case "orange":
            console.log('orange fruit')
            break;
        case "grapes":
            console.log('black fruit')
            break;
        case "mango":
            console.log('yellow fruit')
            break;
        default:
            console.log('New fruit')
            break;
    }
}
checkFruit("apple")
checkFruit("Apple")
checkFruit("peaches")
checkFruit("mango")
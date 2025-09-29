let i = 1;
do {
    console.log(i);
    i++;
}
while (i<0)

let one = [10, 20, 30]

let array1 = new Array(1,2,3,4)

let elements = ["priyanshi", 50 , true, null]
console.log(elements[3])
console.log(one[4])

array1[6] = "riya"
console.log(array1)

console.log(array1[5])

//push(x) = x element will be added at the end
//unshift(x) = x element will be added at the start
//pop() = 1 element will be removed from the end 
//shift() = 1 element will be removed from the start


//write a function that returns sum of all elements of the array
function sum (a){
    let ans = 0
    for(let i = 0; i<a.length; i++){
        ans = ans + a[i]
    }
    return ans
}

console.log(sum)
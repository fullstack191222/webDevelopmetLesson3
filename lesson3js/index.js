function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


const result = sumTo(20);
console.log(result);



function maybeReturn(n) {
    if (n % 2 == 0) {
        return "even";
    }
    // else return undefined
}


// const value = maybeReturn(3)
// console.log(value);

//EXERCISE 
// Write function to get two arguments your name and age and should print to console 
//“My name” + name + “, and my age:” + age.
// Call that function with your name and age
// Rewrite function to be arrow function.
// Call the second function.


function printNameAndAge(name , age) {
    console.log(`my name is ${name} : my age is : ${age}`);
}

//arrow function
printNameAndAgeArrow = (name,age) => {
    console.log(`my name is ${name} : my age is : ${age}`);
}


printNameAndAge("john", 25)
printNameAndAgeArrow("rob", 19)



const arrayIlia = [1,10,5,7]//max = 10

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
//   }
  

console.log(Math.max.apply(null,arrayIlia))
console.log(Math.min.apply(null,arrayIlia))//1


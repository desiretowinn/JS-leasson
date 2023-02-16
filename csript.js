// ======================================
// Homework 3
// ======================================


// == 1 ==

// var number1 = prompt('3 grade')
// console.log(number1 * number1 * number1);


// == 2 ==

// var a = +prompt('sum of numbers')
// var b = +prompt('sum of numbers')
// console.log(a + b);

// == 3 ==

// var a = +prompt('sum of numbers')
// var b = +prompt('sum of numbers')
// console.log(a - b);

// == 4 ==

// var number1 = +prompt('2 grade')
// console.log(number1 * number1);

// var number1 = +prompt('3 grade')
// console.log(number1 * number1 * number1);

// var number1 = +prompt('4 grade')
// console.log(number1 * number1 * number1 * number1);

// == 7 ==

// var a = +prompt('increment')

// var b = +prompt('dikrement')

// console.log(++a);

// console.log(--b);

// == 10 ==

// var a = +prompt('number')
// console.log(a*1, a*2, a*3, a*4, a*5, a*6, a*7, a*8, a*9,);

// --------------------- array ---------------------







// ======================================
// classwork 4
// ======================================



// let number = +prompt("enter a number:")

// if (number === 90 || number === 91 || number === 92){
//     console.log('Beeline');
// }
// else{
//     console.log("beeline number is not correct");
// }




// let number = +prompt("enter a number:")

// if (number % 3 === 0 && number % 5 === 0){
//     console.log('fizzbazz');
// } else if(number % 3 === 0){
//     console.log("fizz");
// } else if(number % 5 === 0) {
//     console.log(Bazz);
// }


// let number = +prompt("enter a number:")

// if (number % 3 ===  && number % 5 === 0){
//     console.log('fizzbazz');
// } else if(number % 3 === 0){
//     console.log("fizz");
// } else if(number % 5 === 0) {
//     console.log(Bazz);
// }

let number = prompt('Enter number')

if (number%2 ===1 && number>0 ){
    console.log('TP')
} else if (number%2 === -1 && number<0){
    console.log('TO')
}else if (number%2 ===0 && number<0){
    console.log('JO')
}else if (number%2 ===0 && number>0){
    console.log('JP')
}
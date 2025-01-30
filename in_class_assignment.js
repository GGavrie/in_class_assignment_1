//Task 1

let expenses = 5000; //Declare Variable

if (expenses > 7000) {
    // if expenses are over 7000 -> High
    console.log("High Expenses");
} else {
    // if expenses otherwize -> Manageable 
    console.log("Manageable Expenses");
}

//Task 2

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Task 3

let num = 2
while (num <= 10) {
    console.log(num);
    num += 2;
}

//Task 4

function calculateSquare(number) {
    return number * number
}
console.log(calculateSquare(5))

//Task 5

const doubleNumber = numb => numb * 2;
console.log(doubleNumber(15));

//Task 6

const numbers = [3,6,9];
const double = numbers.map(numbers => numbers * 2);
console.log(double);


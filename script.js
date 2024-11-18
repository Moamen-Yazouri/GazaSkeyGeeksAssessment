// Task 2
let arrOfNums = [1, 2, 3, 4, 5, 6, 7];


//  call the method that prints the avg and sum
sumOfarr(arrOfNums);

// Impelement the function that calculate the avg and sum
function sumOfarr(arr) {
    let sum = 0;
    let avg = 0;
    sum =  arr.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    avg = sum / arr.length;
    console.log(`The total sum is: ${sum}`);
    console.log(`The Averege is: ${avg}`);    
}

// Task 3
// Because Of constant time complexity
let arrayDub = ["Cat", "Dog", "Hourse", "Cat", "Dog", "Lion"];

// Calling the function
console.log(getUniqueValues(arrayDub));

function getUniqueValues(arr) {

    // Set take the unique values from the array;
    const nonDub = new Set(arr);

    // Turn the nonDub from Set to Array
    return Array.from(nonDub);

}



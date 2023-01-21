console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

let gamesArray = ['checkers', 'chess', 'monopoly', 'battleship'];
console.log('Games are: ', gamesArray)

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let foodsArray = ['chinese', 'ribs', 'steak', 'hibachi']; 


// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('Foods are: ', foodsArray);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of foods:', foodsArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[2]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last itemth
let lastAnimalArray = animalArray[animalArray.length - 1];
console.log('Last animal is', lastAnimalArray);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
foodsArray.push('burgers');
console.log('Added a food to end,', foodsArray);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = foodsArray.pop();
console.log('Removed the last food', removedFood);
console.log('The foods are now', foodsArray);


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foodsArray.unshift('lasagna');
console.log(`Added a food to the beginning: ${foodsArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = foodsArray.shift();
console.log('Removed the first food', removedFood);
console.log('The foods are now', foodsArray);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
removedFood = foodsArray

let index =foodsArray.indexOf('ribs');

if (index !== -1) {
    foodsArray[index] = 'chips';
}
console.log('Updated favorite food', foodsArray);


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
foodsArray
foodsArray.sort();
foodsArray.reverse();

console.log('Foods in reverse', foodsArray);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

foodsArray.toString()
console.log('strings with and added', foodsArray.join (' and ')); 


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

foodsArray
animalArray
let combined = foodsArray.concat(animalArray);
console.log('combined arrays', combined);


//Added Examples from class


/* let colors = [ 'yellow', 'orange', 'green' ]; //length: 3
// 'yellow and orange and green' //<- expected output
let colorText = ' ';
let colorIndex = 0;
for(let color of colors) {
    // let color = 'yellow'
    if (colorIndex === colors.length - 1) {
        colorText += color;
    } else {
        colorText += color + ' and ';
    }
    colorIndex += 1;
}// for of loop


// colorTest.join(' and ');
for (let i = 0; i < colors.length; i += 1) {
    console.log(colors[i]);
    // if we are the last item...
    if (i === colors.length - 1) {
        colorText += colors[i];
    } else {
        colorText += colors[i] + ' and ';//`${colors[i]} and `;
    }
}
console.log(colorText); // 'yellow and orange and green and'

// console.log(colors[0]);
//console.log(colors[1]);
//console.log(colors[2]);

let  food = ['salad', 'pizza', 'chicken'];

let max = food.length;
let start = 0;

while(start < max) {
    console.log(food[start]);
    start += 1;
} */
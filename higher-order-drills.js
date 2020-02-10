function repeat(fn,n){
  for (let i = 0; i < n; i++) {
    fn();
  }
}

const hello = () => console.log('Hello world');
const goodbye = () => console.log('Goodbye world');

repeat(hello, 5);
repeat(goodbye, 5);

//functions as arguments(2)

function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];

  arr.forEach(element => fn(element) ? newArray.push(element) : null);

  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// filter extra credit
const filterAlt = (arr, fn) => arr.forEach(name => fn(name) ? console.log(name) : null);
filterAlt(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});


// functions as return values
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  let time = 'time';

  return function(location){
    warningCounter++;
    if (warningCounter > 1) {
      time = 'times';
    }

    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const policeWarning = hazardWarningCreator('Police');
const accidentWarning = hazardWarningCreator('Accident');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
policeWarning('I-95 on exit 14A');
accidentWarning('Oakwood Rd and Pacheco Ave');

//forEach, filter, and map

function movement(turtle) {
  let newArr = turtle.filter(element => {
    return element[0] >= 0 && element[1] >= 0;
  });
  //newArr.forEach(move => console.log(move));

  let totalSteps = newArr.map(steps => steps[0] + steps[1]);

  let counter = 0;

  totalSteps.forEach(steps => {
    counter++;

    console.log(`Movement #${counter}: ${steps} ${steps == 0 || steps > 1 ? 'steps' : 'step'} `);
  });
}

movement([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);
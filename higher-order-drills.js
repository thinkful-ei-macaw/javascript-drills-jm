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

  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const policeWarning = hazardWarningCreator('Police');
const accidentWarning = hazardWarningCreator('Accident');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
policeWarning('I-95 on exit 14A');
accidentWarning('Oakwood Rd and Pacheco Ave');
// jediName
const jediName = (firstName, lastName) => `${lastName.substring(0, 3)}${firstName.substring(0,2)}`;

console.log(jediName('Beyonce', 'Knowles'));


// beyond
const beyond = num => {
  if (isFinite(num)){
    if (num > 0) {
      return 'To infinity';
    } else if (num < 0) {
      return 'To negative infinity';
    } else {
      return 'Staying home';
    }
  } else {
    return 'And beyond';
  }
}

console.log(beyond(Infinity));
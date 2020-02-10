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

//cracking the code

function decode(message) {
    const firstLetter = message.charAt(0);

    if (firstLetter === 'a') {
        return message.charAt(1);
    } else if (firstLetter === 'b') {
        return message.charAt(2);
    } else if (firstLetter === 'c') {
        return message.charAt(3);
    } else if (firstLetter === 'd') {
        return message.charAt(4);
    } else {
        return ' ';
    }
}

function decodeMessage(wholeMessage) {
    let decoded = '';
    let words = wholeMessage.split(' ');

    for(let i = 0; i <= words.length - 1; i++) {
        decoded += decode(words[i]);
    }

    return decoded;
}

console.log(decode('cycle'));

console.log(decodeMessage('craft block argon meter bells brown croon droop'));


// How many days in a month
function howManyDays(month, leapYear){
  let result = '';
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      result = `${month} has 31 days`;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      result = `${month} has 30 days`;
      break;
    case "February":
      result = leapYear ? `February has 29 days` : `February has 28 days`;
      break;
    default:
      throw new Error('Must provide a valid month.');
  }

  return result;

}

console.log(howManyDays('February', true));
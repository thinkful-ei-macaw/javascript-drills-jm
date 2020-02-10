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
function getYearOfBirth(age) {
    if (age < 0) {
      throw new Error('Age can not be negative');
    }
    return 2020 - age;
}

function createGreeting(name, age) {
    if (name == undefined || age == undefined) {
        throw new Error('Arguments not valid');
    } else if (typeof name !== 'string' || typeof age === NaN) {
        throw new TypeError('Invalid data type for name/age');
    }

    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting(12, "George");
  console.log(greeting1);
} catch (e) {
  console.log(e);
}
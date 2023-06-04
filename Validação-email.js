const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
console.log('john.doe@example.com =>', emailRegex.test('john.doe@example.com')); // true
console.log('john.doe@example.co.uk =>', emailRegex.test('john.doe@example.co.uk')); // true
console.log('john.doe@gmail.com.br =>', emailRegex.test('john.doe@gmail.com.br')); // true
console.log('john.doe@example. =>', emailRegex.test('john.doe@example.')); // false
console.log('john.doe@examplecom =>', emailRegex.test('john.doe@examplecom')); // false
console.log('johndoegmail.com =>', emailRegex.test('johndoegmail.com')); // false
console.log('@example.com =>', emailRegex.test('@example.com')); // false

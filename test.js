// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(2);

    // If 1 dolloar is 156.5 yen, then 2 dollars should be (2 * 156.5)
    const expected = 2 * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(313); // 1 dollars is 156.5 yen, then 2 dolloars should be = (2 * 156.5)
})

test("one yen should be 0.87 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const Yen= fromYenToPound(5);

    // If 1 Yen is 0.87 pound, then 5 euros should be (5* 0.87)
    const expected = 5 * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(5)).toBe(4.35); // 1 yen  is 0.87 pound, then 5 yen should be = (5 * 0.87)
})


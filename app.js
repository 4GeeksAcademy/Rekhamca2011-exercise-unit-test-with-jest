console.log("Hello World")

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueinDollar to yen
    let valueInYen = valueInDollar * 156.5;
    // return the yen value
    return valueInYen;
}


// We declare the function with the exact name "from Yen To Pound"
const fromYenToPound = function(valueInYen) {

    // Convert the given value in Yen to Pound
    let valueInPound = valueInYen * 0.87;

    // return the yen value
    return valueInPound;
}


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


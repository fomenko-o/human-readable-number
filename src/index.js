module.exports = function toReadable (number)  {
    let text;
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    let teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let tens = [
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    number = number.toString();

    let hundreds = ones[number.slice(-3, -2)] + " hundred";
    ones = ones[number.slice(-1)];

    let i;

    if (number.slice(-2, -1) == "1") {
        i = number.slice(-2);
        teens = teens[i - 10];
        if (number.length == 3) {
            text = `${hundreds} ${teens}`;
        } else {
            text = `${teens}`;
        }
    } else {
        i = number.slice(-2, -1);
        i == "0" ? (i = 1) : (i = i);
        tens = tens[i - 1];
        if (number.length == 3) {
            i == "1" ? text = `${hundreds} ${ones}` : text = `${hundreds} ${tens} ${ones}` ;
        }  else if (number.length == 2) {
            text = `${tens} ${ones}`;
        } else {
            text = `${ones}`;
        }
    }
    if (number == 0) {return 'zero'} 
    else {return text.trim()};
};

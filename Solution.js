
/**
 * @param {number[]} input
 * @return {number[]}
 */
var findLonely = function (input) {
    const maxValue = Math.max(...input);
    const frequency = new Array(maxValue + 1).fill(0);
    for (let value of input) {
        ++frequency[value];
    }

    return extractAllLonelyNumbers(frequency, maxValue);
};

/**
 * @param {number[]} frequency
 * @param {number[]} maxValue
 * @return {number[]}
 */
function extractAllLonelyNumbers(frequency, maxValue) {
    const allLonelyNumbersInInput = new Array();
    for (let value = 0; value <= maxValue; ++value) {
        if (frequency[value] === 1 && hasNoAdjacentElements(frequency, value)) {
            allLonelyNumbersInInput.push(value);
        }
    }
    return allLonelyNumbersInInput;
}

/**
 * @param {number[]} frequency
 * @param {number} value
 * @return {number[]}
 */
function hasNoAdjacentElements(frequency, value) {
    return (value - 1 < 0 || frequency[value - 1] === 0)
            && (value + 1 === frequency.length || frequency[value + 1] === 0);
}

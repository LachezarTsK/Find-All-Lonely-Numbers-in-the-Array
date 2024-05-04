
function findLonely(input: number[]): number[] {
    const maxValue = Math.max(...input);
    const frequency = new Array(maxValue + 1).fill(0);
    for (let value of input) {
        ++frequency[value];
    }

    return extractAllLonelyNumbers(frequency, maxValue);
};

function extractAllLonelyNumbers(frequency: number[], maxValue: number) {
    const allLonelyNumbersInInput: number[] = new Array();
    for (let value = 0; value <= maxValue; ++value) {
        if (frequency[value] === 1 && hasNoAdjacentElements(frequency, value)) {
            allLonelyNumbersInInput.push(value);
        }
    }
    return allLonelyNumbersInInput;
}

function hasNoAdjacentElements(frequency: number[], value: number) {
    return (value - 1 < 0 || frequency[value - 1] === 0)
        && (value + 1 === frequency.length || frequency[value + 1] === 0);
}

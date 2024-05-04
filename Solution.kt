
class Solution {

    fun findLonely(input: IntArray): List<Int> {
        val maxValue = input.max()
        val frequency = IntArray(maxValue + 1)
        for (value in input) {
            ++frequency[value]
        }

        return extractAllLonelyNumbers(frequency, maxValue)
    }

    private fun extractAllLonelyNumbers(frequency: IntArray, maxValue: Int): List<Int> {
        val allLonelyNumbersInInput = ArrayList<Int>()
        for (value in 0..maxValue) {
            if (frequency[value] == 1 && hasNoAdjacentElements(frequency, value)) {
                allLonelyNumbersInInput.add(value)
            }
        }
        return allLonelyNumbersInInput
    }

    private fun hasNoAdjacentElements(frequency: IntArray, value: Int): Boolean {
        return (value - 1 < 0 || frequency[value - 1] == 0)
                && (value + 1 == frequency.size || frequency[value + 1] == 0)
    }
}

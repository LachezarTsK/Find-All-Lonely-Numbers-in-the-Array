
package main

import (
	"slices"
)

func findLonely(input []int) []int {
	maxValue := slices.Max(input)
	frequency := make([]int, maxValue+1, maxValue+1)
	for i := 0; i < len(input); i++ {
		frequency[input[i]]++
	}

	return extractAllLonelyNumbers(frequency, maxValue)
}

func extractAllLonelyNumbers(frequency []int, maxValue int) []int {
	allLonelyNumbersInInput := []int{}
	for value := 0; value <= maxValue; value++ {
		if frequency[value] == 1 && hasNoAdjacentElements(frequency, value) {
			allLonelyNumbersInInput = append(allLonelyNumbersInInput, value)
		}
	}
	return allLonelyNumbersInInput
}

func hasNoAdjacentElements(frequency []int, value int) bool {
	return (value-1 < 0 || frequency[value-1] == 0) &&
		(value+1 == len(frequency) || frequency[value+1] == 0)
}

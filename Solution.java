
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {

    public List<Integer> findLonely(int[] input) {
        int maxValue = Arrays.stream(input).max().getAsInt();
        int[] frequency = new int[maxValue + 1];
        for (int value : input) {
            ++frequency[value];
        }

        return extractAllLonelyNumbers(frequency, maxValue);
    }

    private List<Integer> extractAllLonelyNumbers(int[] frequency, int maxValue) {
        List<Integer> allLonelyNumbersInInput = new ArrayList<>();
        for (int value = 0; value <= maxValue; ++value) {
            if (frequency[value] == 1 && hasNoAdjacentElements(frequency, value)) {
                allLonelyNumbersInInput.add(value);
            }
        }
        return allLonelyNumbersInInput;
    }

    private boolean hasNoAdjacentElements(int[] frequency, int value) {
        return (value - 1 < 0 || frequency[value - 1] == 0)
                && (value + 1 == frequency.length || frequency[value + 1] == 0);
    }
}

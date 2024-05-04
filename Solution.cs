
using System;
using System.Collections.Generic;

public class Solution
{
    public IList<int> FindLonely(int[] input)
    {
        int maxValue = input.Max();
        int[] frequency = new int[maxValue + 1];
        foreach (int value in input)
        {
            ++frequency[value];
        }

        return extractAllLonelyNumbers(frequency, maxValue);
    }

    private IList<int> extractAllLonelyNumbers(int[] frequency, int maxValue)
    {
        IList<int> allLonelyNumbersInInput = new List<int>();
        for (int value = 0; value <= maxValue; ++value)
        {
            if (frequency[value] == 1 && hasNoAdjacentElements(frequency, value))
            {
                allLonelyNumbersInInput.Add(value);
            }
        }
        return allLonelyNumbersInInput;
    }

    private bool hasNoAdjacentElements(int[] frequency, int value)
    {
        return (value - 1 < 0 || frequency[value - 1] == 0)
                && (value + 1 == frequency.Length || frequency[value + 1] == 0);
    }
}

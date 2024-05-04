
#include <span>
#include <vector>
#include <ranges>
using namespace std;

class Solution {

public:
    vector<int> findLonely(const vector<int>& input) const {
        int maxValue = ranges::max(input);
        vector<int> frequency(maxValue + 1);
        for (const auto& value : input) {
            ++frequency[value];
        }

        return extractAllLonelyNumbers(frequency, maxValue);
    }

    vector<int> extractAllLonelyNumbers(span<const int> frequency, int maxValue) const {
        vector<int> allLonelyNumbersInInput;
        for (int value = 0; value <= maxValue; ++value) {
                if (frequency[value] == 1 && hasNoAdjacentElements(frequency, value)) {
                        allLonelyNumbersInInput.push_back(value);
                }
        }
        return allLonelyNumbersInInput;
    }

    bool hasNoAdjacentElements(span<const int> frequency, int value) const {
        return (value - 1 < 0 || frequency[value - 1] == 0)
                && (value + 1 == frequency.size() || frequency[value + 1] == 0);
    }
};

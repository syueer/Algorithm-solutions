var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j];
            }
        }
    }
    return [];
};
var twoSum1 = function (nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
};


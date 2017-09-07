function nextGreaterElement(findNums, nums) {
    // let tmp = nums.slice();
    let map = {};
    let arr = [];
    let res = [];
    // arr[0] = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] in map) {
            continue;
        } else {
            arr.push(nums[i]);
            j = i + 1;
            while (arr[0] >= nums[j] && j < nums.length) {
                j++;
            }
            if (arr[0] < nums[j]) {
                map[arr[0]] = nums[j];
            } else {
                map[arr[0]] = -1;
            }
            arr.pop();
        }
    }
    // console.log(nums[nums.length-1]);
    if (!(nums[nums.length-1] in map)) {
        console.log('enter last');

        map[nums[nums.length-1]] = -1;
    }
    console.log(map);
    for (let i = 0; i < findNums.length; i++) {
        // console.log('map[findNums[i]]',map[findNums[i]]);
        res.push(map[findNums[i]]);
    }
    return res;
}

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

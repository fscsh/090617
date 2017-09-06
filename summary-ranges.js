function summaryRanges(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        // let tmp = nums[i]
        while (nums[j] + 1 === nums[j + 1]) {
            j++;
        }
        if (i !== j) {
            res.push(nums[i] + '->' + nums[j]);
        } else {
            res.push(nums[i] + '');
        }
        i = j;
    }
    return res;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

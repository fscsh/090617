function nextGreaterElement(findNums, nums) {
    console.log(findNums);
    let map = {};
    let res = [];
    for (let i = 0; i < findNums.length; i++) {
        console.log('i = ', i, '***res = ', res);
        if (findNums[i] in map) {
            res.push(map[findNums[i]]);
            continue;
        }
        let count = 1111;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === findNums[i]) {
                let tmp = nums.slice(j);
                console.log('tmp =', tmp);
                for (let t = 0; t < tmp.length; t++) {
                    if (tmp[t] > nums[j]) {
                        map[findNums[i]] = tmp[t];
                        console.log('nums[t]', nums[t]);
                        res.push(tmp[t]);
                        count = 1;
                        break;
                    }
                }
            }
        }
        if (count === 1111) {
            res.push(-1);
            // console.log('i = ', i, 'res', res);
        }

    }
    return res;

}

let nums1 = [1, 3, 5, 2, 4];
let nums2 = [6, 5, 4, 3, 2, 1, 7];
console.log(nextGreaterElement(nums1, nums2));

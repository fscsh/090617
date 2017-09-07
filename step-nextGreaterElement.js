function nextGreaterElement(findNums, nums) {
    let tmp = nums.slice();
    let map = {};
    let arr = [];
    arr[0] = nums[0];
    for(let i =1;i<nums.length;i++) {
        arr.push(nums[i])
        if (tmp[i]<tmp[i+1]) {
            map[i]=tmp[i+1];
        }

    }
    for (let j = 0; j < findNums.length; j++) {

    }
}
}

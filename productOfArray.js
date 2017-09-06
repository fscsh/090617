function productExceptSelf(nums) {
    let totalp = 1;
    let arrbegin = [1];
    let arrend = [];
    arrend[nums.length + 1] = 1;
    let res = [];
    for (let i = 1; i <= nums.length; i++) {
        arrbegin[i] = arrbegin[i - 1] * nums[i - 1];
    }
    console.log('arrbegin',arrbegin);
    for (let j = nums.length; j > 0; j--) {
        arrend[j] = arrend[j + 1] * nums[j - 1];
    }
    arrend.shift();
    console.log('arrend',arrend);
    for (let i = 1; i <= nums.length; i++) {
        res[i - 1] = arrbegin[i - 1] * arrend[i];
    }
    return res;
}

// let nums = [1, 2, 3, 4];
let nums =[0,0];
// let nums = [0,2,4];
console.log(productExceptSelf(nums));

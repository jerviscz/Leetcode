var removeDuplicates = function(nums) {
    let i = 0,len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i] != nums[i + 1]){
            nums.push(nums[i]);
        }
    }
    nums.splice(0,len);
    return nums.length;
};
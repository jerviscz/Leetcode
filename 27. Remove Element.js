var removeElement = function(nums, val) {
    let len=nums.length;
    for (var i=0; i < len; i++){
        if(nums[i] !== val){
            nums.push(nums[i]);
        }
    }
    nums.splice(0,len);
    return nums.length;
};
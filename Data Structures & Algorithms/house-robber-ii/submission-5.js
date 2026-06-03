class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 1) return nums[0];

        if(nums.length === 2) return Math.max(nums[0], nums[1])

        let dp1 = [nums[0], Math.max(nums[0], nums[1])];

        for (let i =2; i <= nums.length -2; i++){
            dp1[i] = Math.max(dp1[i-1], dp1[i-2]+nums[i])
        }

        let res1 = dp1[nums.length - 2];


        let dp2 = [0,nums[1], Math.max(nums[1], nums[2])];

        for (let j=3; j <=nums.length - 1; j++){
            dp2[j] = Math.max(dp2[j-1], dp2[j-2]+nums[j])
        }

        let res2 = dp2[nums.length - 1];

      console.log(res1, res2);

      let res = Math.max(res1, res2);

      console.log(res);

      return res;
    }


}

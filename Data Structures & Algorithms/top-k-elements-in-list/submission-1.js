class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let numsMap = {};

        for (let i =0; i<nums.length;i++){
            if(nums[i] in numsMap){
                numsMap[nums[i]] = numsMap[nums[i]] + 1
            }else{
                numsMap[nums[i]] = 1
            }
        }

        console.log(Object.entries(numsMap))

        const arr = Object.entries(numsMap).map((obj) => 
            [obj[1],
            parseInt(obj[0])]
        ).sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((obj) => obj[1])
    }
}

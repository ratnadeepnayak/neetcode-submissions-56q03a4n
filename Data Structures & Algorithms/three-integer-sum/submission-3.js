class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        //[-1,-1,0,1,2,4]
        let res= [];
        let sortedNums = nums.sort((a,b) => a -b);

            for (let i = 0; i < sortedNums.length -2; i++) {
            
            if(i > 0 && sortedNums[i] === sortedNums[i-1]){
                continue;
            }

            let j = i + 1;
            let k = sortedNums.length - 1;

            while(j < k){
                let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if(sum  > 0){
                    k--;
                }else if(sum < 0){
                    j++
                }else{
                    res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);

                    while(j < k && sortedNums[j] === sortedNums[j+1]){
                        j++;
                    }

                    while(j < k && sortedNums[k] === sortedNums[k-1]){
                        k--;
                    }
                j++;
                k--
                }


            }
        }

        console.log(res)

        return res;
    }
}

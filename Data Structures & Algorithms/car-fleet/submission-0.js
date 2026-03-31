class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        /*. 
        
           it starts at position 1 and 4 with speed 3 and 2
           lets combine them
           [[1,3], [4,2]]  .......  target 10

           first car will reach destination at time 3
           second car will reach destination at time 3
           since both of them are reaching at the same time it will be 1 

           
           
         */

        let pair = position.map((p,i) => [p,speed[i]]);
        pair.sort((a,b) => b[0] - a[0]);
        let stack = [];

        for (let i =0; i<pair.length;i++){
            let initialDistance = pair[i][0];
            let speed = pair[i][1];
            let time = (target - initialDistance)/speed;
            stack.push(time);

            if(stack.length >=2 &&
               stack[stack.length -1] <= stack[stack.length -2]
            ){
                stack.pop();
            }
        }

        return stack.length;

    }
}

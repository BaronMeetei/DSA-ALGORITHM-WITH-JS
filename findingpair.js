//shorted Array is given below
//[-7,-5,-3,-1,0,1,3,4,5,6] => input
// [-5,5] => Output
// Finding pair with less time Complexsity.
function Finding_pair(array){
    var left = 0;
    var right = array.length-1;


    while( left < right ){
        let sum = array[left]+ array[right];
        if(sum === 0){
            return (array[left],array[right]);
        }
            if(sum > 0){
             left--;
            } 
            else {
            right++;
            }
        }
    }
const result = Finding_pair([-7,-5,-3,-1,0,1,3,4,5,6,9]);
console.log (result);
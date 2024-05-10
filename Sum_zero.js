//checking sum of zero
//shorted Array is given below
//[-7,-5,-3,-1,0,1,3,4,5,6] => input
// [-5,5] => Output
function SumZero(array){
    for(let number of array){
        console.log("loop of outside");
        for(var j=2;j<array.length;j++){
            console.log("loop of inside");
            if (number + array[j] === 0){
                return [number,array[j]]; 
            }
        }
        
    }
}
 const result = SumZero([-7,-5,-3,-1,0,1,3,4,5,6]);
 console.log (result);

 //time Complexsity is 0(n^2) 
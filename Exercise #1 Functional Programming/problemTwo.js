// custom iterator

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray[Symbol.iterator] = function(){
    let curr = 2 * Math.round(numArray[0] / 2) -2; 
    let end = numArray[numArray.length-1]; 
    return {
        next: function(){
            if (curr <= end){
                curr +=2 ; 
            }
            if (curr > end){
                return {
                    done: true}
            } else{
                return {
                    value: curr, 
                    done: false
                }
            }
            }
        }
    }

for (e of numArray){
    console.log(e)
}
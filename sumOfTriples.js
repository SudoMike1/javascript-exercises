function sumOfTripledEvens (array){
    
    array.filter(isEven)
    .map((x )=> 3 * x)
    .reduce((acc, current) => acc + current);

}
function isEven (x){
    if (x % 2 ==0){
        return true
    } 
    return false
}

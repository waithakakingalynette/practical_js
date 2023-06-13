function dividedArray(g){
    if(g.length<= 1){
        return g;
    } 
    let middle=Math.floor(g.length/2);
    let left=g.slice(0,middle);
    let right=g.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(dividedArray(left),dividedArray(right));

}

function sortedArray(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift());

        }
        else{
            emptyArr.push(right.shift());

        }
    }
    return [...emptyArr,...left,...right];
}
let g=[2,4,6,8,10,3,5,7,9];
console.log(dividedArray(g));

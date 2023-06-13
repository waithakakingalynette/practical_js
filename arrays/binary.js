function binary(num1,target){
    let left=0
    let right=num1.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num1[middle]== target){
            return middle
        }
        else if(num1[middle]>target){
             right=middle-1;
        }
        else{
            left=middle+1
        }
    }
    return null
}

let num1=[5,3,7,45,9,20,17];
let target=20
console.log(binary(num1,target))

class PossibleFruits{
   constructor(fruits,seasons,power,effects){
    this.fruits=fruits
    this.seasons=seasons
    this.power=power
    this.effects=effects
   }
}

let fruits=[]
let firstFruit=new PossibleFruits("Baobabfruit","dry","strength","strong")
fruits.push(firstFruit)

class Seasons{
    constructor (seasons){
        this.seasons=seasons
    }
    predictFruit(){
        let fruit=fruits.filter(items => items.seasons=== this.seasons)
        return fruit
    }
}
function reverse(array){

    if (typeof array=="object"){
        let arrayTotal =[]
        for(let i=array.length-1;i>=0;i--){
            arrayTotal.push(array[i])
        }
    
        return arrayTotal
    }else if(typeof array=="string"){

        let arrayTotal =""
        for(let i=array.length-1;i>=0;i--){
            arrayTotal += array[i]
        }
    
        return arrayTotal
    }
  
}


console.log(reverse("je"))
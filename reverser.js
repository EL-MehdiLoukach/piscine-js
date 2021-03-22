function reverse(array){
    let arrayTotal =[]
    for(let i=array.length-1;i>=0;i--){
        arrayTotal.push(array[i])
    }

    return arrayTotal
}


console.log(reverse(["5",4,87,"wesh"]))
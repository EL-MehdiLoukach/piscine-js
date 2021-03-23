function slice(array,firstindex,secondIndex){

    let isString = false
    let chaineFinal = ""
    let tableFinale = []

    if (typeof array=="string"){
        isString = true
    }

    if (firstindex > secondIndex && isString){
        return chaineFinal
    }else if (firstindex > secondIndex && !isString){
        return tableFinale
    }

    if (firstindex == undefined && secondIndex == undefined){
        return array
    }

    if (firstindex > 0 && secondIndex == undefined){
        if (firstindex > array.length){
            return []
        }else{
            for(let i =firstindex;i <array.length;i++){
                if (isString){
                    chaineFinal +=array[i]
                }else{
                    tableFinale.push(array[i])
                }
            }
        }
        if (isString){
            return chaineFinal
        }
        return tableFinale
    }

    if(firstindex < 0 && (secondIndex==undefined ||secondIndex<0)){
        let a = rangeWithIndexNegative(array,firstindex,secondIndex)
        return a
    }else if (firstindex < secondIndex){
        let myArray = rangeInArray(array,firstindex,secondIndex)
        return myArray
    }
}

function rangeWithIndexNegative(array,firstIndex,secondIndex){

    if(typeof secondIndex=="undefined"){
        secondIndex= array.length-1
    }


    let table = []
    let chaine =""
    let compteur = 0
    for(let i=array.length-1;i>=0;i--){
        if (compteur<(-firstIndex) && compteur>=(-secondIndex)){
            if(typeof array=="string"){
                chaine += array[i]
            }else{
                table.push(array[i])
            }
        }
        compteur+=1
    }
    if(typeof array=="string"){
        return chaine.split("").reverse().join("");
    }else{
        return table.reverse()
    }
    
}

function rangeInArray(array,firstIndex,secondIndex){
    if (typeof array=="string"){
        let chaine = ""
        for(let i = 0;i<array.length;i++){
            if (i >=firstIndex && i <secondIndex){
                chaine += array[i]
            }
        }
        return chaine
    }else{
        let table = []
        for(let i = 0;i<array.length;i++){
            if (i >=firstIndex && i <secondIndex){
                table.push(array[i])
            }
        }
        return table
    }
}

console.log(slice("The quick brown fox jumps over the lazy dog.", 31))

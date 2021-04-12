function indexOf(array, value, fromIndex = 0){
    for (let i = fromIndex; i < array.length; i++){
        if (array[i] == value){
            return i
        }
    }return -1
}

function lastIndexOf(array, value, fromIndex = array.length - 1){
    for (let i = fromIndex; i >= 0; i--){
        if (array[i] == value){
            return i
        }
    }
    return -1
}

function includes(array, value){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true
        }
    } return false
}
/*function indexOf(array,valueInArray,number){
    let compteur = 0

    for(let i=0;i<=array.length-1;i++){

        if (valueInArray==array[i]&&number==undefined){
            return i
        }

        if (valueInArray==array[i]){
            compteur +=1
        }

        if (compteur==number+1){
            return i
        }
       
    }

    if (compteur == 0){
        return -1
    }

    return compteur
}

function lastIndexOf(array,valueInArray,number){
    let compteur = 0

    for(let i = array.length-1;i>=0;i--){

        if (i>number){
            continue
        }

        if (valueInArray==array[i] && number==undefined){
            return i
        }

        if (valueInArray==array[i]){
            return i
        }
    }

    if (compteur==0){
        return -1
    }
    
    return compteur
}

function includes(array, number){
    for(let i=0;i<array.length;i++){
        if (number==array[i]){
            return true
        }
    }

    return false
}

console.log(lastIndexOf([0, 0, "t", "t"], "t", 3))*/
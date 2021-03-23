function round(number){
    let compteur = 0
    let NUMBER = number

    if (number < 0){
        NUMBER = -number
    }
    
    if (NUMBER %1 == 0){
        return number
    }

    for(let i = 0;i<NUMBER;i++){
        compteur = i
    }

    if(NUMBER%1>=0.5){
        if (number < 0){
            return -compteur-1
        }
        return compteur + 1
    }else if (NUMBER%1<0.5){
        if(number < 0){
            return-compteur
        }
        return compteur
    }
    return NaN
}

function ceil(number){

    let compteur = 0
    let NUMBER = number
    
    if (number < 0){
        NUMBER = -number
    }

    if (NUMBER %1 == 0){
        return number
    }

    for(let i =0;i<NUMBER;i++){
        compteur = i
    }

    if (number > 0){
        return compteur + 1
    }else if (number< 0){
        return -compteur
    }

    return NaN
}

function floor(number){

    let compteur = 0
    let NUMBER = number
    
    if (number < 0){
        NUMBER = -number
    }

    if (NUMBER %1 == 0){
        return number
    }

    for(let i =0;i<NUMBER;i++){
        compteur = i
    }

    if (number > 0){
        return compteur
    }else if (number< 0){
        return -compteur - 1
    }
    return NaN
}

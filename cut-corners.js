function round(number){

    if (typeof number!="number"){
        return NaN
    }
    let compteur = 0
    let NUMBER = number

    if (number < 0){
        NUMBER = -number
    }

    for(let i = 0;i<NUMBER;i++){
        compteur = i
    }

    if(NUMBER%1>=0.5){
        if (number < 0){
            return -compteur-1
        }
        return compteur + 1
    }else{
        if(number < 0){
            return-compteur
        }
        return compteur
    }
}

function ceil(number){
    if (typeof number!="number"){
        return NaN
    }

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
    }else{
        return -compteur
    }
}

function floor(number){
    if (typeof number!="number"){
        return NaN
    }

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
    }else{
        return -compteur - 1
    }
}

function trunc(number){
    if (typeof number!="number"){
        return NaN
    }

    let compteur = 0
    let NUMBER = number
    
    if (number < 0){
        NUMBER = -number
    }

    for(let i =0;i<NUMBER;i++){
        compteur = i
    }

    if (number > 0){
        return compteur
    }else{
        return -compteur
    }
}

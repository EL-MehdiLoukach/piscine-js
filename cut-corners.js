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
    }else{
        if(number < 0){
            return-compteur
        }
        return compteur
    }
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
    }else{
        return -compteur
    }
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
    }else{
        return -compteur - 1
    }
}

function trunc(number){

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
        return -compteur
    }
}

console.log(trunc(-4))
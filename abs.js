function isPositive(number){
    if (number > 0){
        return true
    }else{
        return false
    }
}

function abs(number){
    if (number > 0){
        return number
    }else if (number ==0){
        return 0
    }else{
        let compteur = 0
        for(let i = 0;i > number;i--){
            compteur += 1
        }

        return compteur
    }
}
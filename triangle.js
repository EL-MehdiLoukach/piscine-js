var stringFinal = ""
function triangle(character,number){

    for(let i=1;i <=number;i++){
        stringFinal += character
    }

    stringFinal +="\n"

    if (number == 1){
        return stringFinal
    }

    triangle(character,number-1)

    return stringFinal
}

console.log(triangle("#",2))
var stringFinal = ""
function triangle(character,number){

    for(let i=1;i <=number;i++){
        stringFinal += character
    }

    

    if (number == 1){
        stringFinal = stringFinal.split("").reverse().join("")
        return stringFinal
    }else{
        stringFinal +="\n"
    }

    triangle(character,number-1)

    return stringFinal
}

console.log(triangle("#",4))
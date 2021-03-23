var stringFinal = ""

function triangle(character,number){

    if (number == 1){
        stringFinal +=character
        stringFinal +="\n"
        return stringFinal
    }
    triangle(character,number-1)
    for(let i=1;i <=number;i++){
        stringFinal += character
    }
    stringFinal +="\n"
    
return stringFinal
}
console.log(triangle("*",4))
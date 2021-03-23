var stringFinal = ""
function triangle(number){

    for(let i=1;i <=number;i++){
        stringFinal += "*"
    }

    stringFinal +="\n"

    if (number == 1){
        return stringFinal
    }

    triangle(number-1)

    return stringFinal
}

console.log(triangle(2))
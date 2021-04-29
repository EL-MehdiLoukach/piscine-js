
function bloodySunday(date){
    let date001 = new Date("0001-01-01")
    let result = date - date001

    let seconde = (result * 0.001)
    let calcul = (seconde * 3600) * 24

    console.log(calcul)
    return "Monday"
}

export function getArchitects(){
    let architectArray = [...document.getElementsByTagName("a")]
    let noArchitectArray = [...document.getElementsByTagName("span")];
    let tableFinal = []


    tableFinal.push(architectArray,noArchitectArray)

    return tableFinal
}

export function getClassical(){
    let allClassical = [...document.querySelectorAll(".classical")]
    let noClassical = [...document.querySelectorAll("span,a:not(.classical)")]

    let tableFinal = [] 
    tableFinal.push(allClassical,noClassical)

    return tableFinal
}

export function getActive(){

    let actives = [...document.querySelectorAll(".classical.active")]
    let noActives = [...document.querySelectorAll("a:not(.classical.active)")]

    let tableFinal = []

    tableFinal.push(actives,noActives)

    return tableFinal
}

export function getBonannoPisano(){

    let bonannoPisano = document.getElementById("BonannoPisano")
    let noPisano = [...document.querySelectorAll(".classical.active")]

    for(let i = 0;i<noPisano.length;i++){
        if(noPisano[i].getAttribute('id')=="BonannoPisano")[
            noPisano.splice(i,1)
        ]
    }

    let tableFinal = []

    tableFinal.push(bonannoPisano,noPisano)

    return tableFinal
}
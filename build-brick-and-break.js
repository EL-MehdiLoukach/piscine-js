export function build(number){
    x = setInterval(buildIntervall,100,number)
}

let x 
let MEGACOMPTEUR = 0
let compteur =0

function buildIntervall(number){

    let body = document.querySelector("body")
    compteur ++
    MEGACOMPTEUR++
    if (MEGACOMPTEUR== number+1){
        clearInterval(x)
        return 
    }
    
    if (compteur==3){
        compteur=0
    }

    let element = document.createElement("div")
    let idName = "brick-" + MEGACOMPTEUR.toString()
    element.setAttribute('id',idName)

    if (compteur==2){
        element.setAttribute("foundation","true")
    }
    body.append(element)
}

export function repair(listIds){

        let element = document.getElementById(listIds)
        let a = element.getAttributeNode("foundation")
        if(a ==true){
            element.setAttribute("repaired","in progress")
        }else{
            element.setAttribute("repaired","true")
        }
    

}

export function destroy(){
    let element =  document.querySelectorAll("div")

    element[element.length-1].remove()
}
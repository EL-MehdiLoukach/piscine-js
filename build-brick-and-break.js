export function build(number){
    x = setInterval(buildIntervall,100,number)
}

let x 
let MEGACOMPTEUR = 0


function buildIntervall(number){

    let body = document.querySelector("body")
    MEGACOMPTEUR++
    if (MEGACOMPTEUR== number+1){
        clearInterval(x)
        return 
    }

    let element = document.createElement("div")
    let idName = "brick-" + MEGACOMPTEUR.toString()
    element.setAttribute('id',idName)

    if (MEGACOMPTEUR%3==2){
        element.dataset.foundation = "true"
    }
    body.append(element)
}

export function repair(listIds){

    for(let i =0;i<listIds.length;i++){
        let element = document.getElementById(listIds)
        let a = element.dataset.foundation
        
        if(a  == "true"){
            element.dataset.repaired = "in progress"
        }else{
            element.dataset.repaired = "true"
        }
    }  
}

export function destroy(){
    let element =  document.querySelectorAll("div")

    element[element.length-1].remove()
}
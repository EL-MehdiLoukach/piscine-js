

export function getArchitects(){
let architectArray = []
let noArchitectArray =[]
let tableFinal = []
let linkArray = document.getElementsByTagName("a")
let spanArray= document.getElementsByTagName('span')

for(let i = 0;i<linkArray.length;i++){
    let idLink = linkArray[i].getAttribute('id')
    architectArray.push(idLink)
}

for(let i=0;i<spanArray.length;i++){
    let idSpan = spanArray[i].getAttribute('id')
    noArchitectArray.push(idSpan)
}

tableFinal.push(architectArray,noArchitectArray)

console.log(tableFinal)

return tableFinal
}

export function getClassical(){

}

export function getActive(){
    
}

export function getBonannoPisano(){
    
}
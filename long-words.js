function longWords(array1){
    const t = array1.every((element) =>{
        return element.length >= 5
    })

    return t
}

function oneLongWord(array1){
    const t = array1.some((element)=>{
        return element.length >=10
    })
    return t
}


function noLongWords(array1){
    console.log(array1)
    const t = array1.every((element)=>{
        return element.length >= 7
    })

    return t
}

console.log(noLongWords([ 'fill', 'carbon', 'chart', 'glare', 'express' ]))
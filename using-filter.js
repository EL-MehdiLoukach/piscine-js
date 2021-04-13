function filterShortStateName(arrayString){
    const tableau = arrayString.filter((element)=>{
        return element.length < 7
    })
    return tableau
}

function filterStartVowel(arrayString){
    const tableau = arrayString.filter((element)=>{
        if(element[0].toLowerCase() == "a"|| element[0].toLowerCase() == "e"||element[0].toLowerCase() == "i"||element[0].toLowerCase() == "o"||element[0].toLowerCase() == "u"){
            return element
        }
    })
    console.log(tableau)
    return tableau
}

function filter5Vowels(arrayString){
    const tableau = arrayString.filter((element)=>{
        let compteur = 0
        for (let ch of element.toLowerCase()){
            if (ch == "a" || ch == "e"||ch == "i" ||ch == "o" ||ch == "u"){
                compteur++
            }

            if (compteur >=5){
                return element
            }
        }
    })
    return tableau
}

function filter1DistinctVowel(arrayString){

    const tableau = arrayString.filter((element) =>{
        let compteurVoyelle = 0
        let b = element.toLowerCase()

        if (b.includes("a")){
            compteurVoyelle++
        }

        if (b.includes("e")){
            compteurVoyelle++
        }

        if (b.includes("i")){
            compteurVoyelle++
        }

        if (b.includes("o")){
            compteurVoyelle++
        }

        if (b.includes("u")){
            compteurVoyelle++
        }

        if (compteurVoyelle == 1){
            return element
        }
    })
    return tableau
}


function multiFilter(arrayString){
    const tableau = arrayString.filter((element) =>{
        let name= false
        let capital = false
        let tag = false
        let region = false
        let b = element.tag.toLowerCase()

        if (element.capital.length>=8){
            capital = true
        }
        if (element.name[0].toLowerCase() != "a" && element.name[0].toLowerCase() != "e" && element.name[0].toLowerCase() != "i" && element.name[0].toLowerCase() != "o" && element.name[0].toLowerCase() != "u"){
            name = true
        }
        if (b.includes("a") || b.includes("e") || b.includes("i") || b.includes("o") || b.includes("u")){
            tag = true
        }
        if (element.region != "South"){
            region = true
        }

        if (name && region && tag && capital){
            return element
        }
    })
    console.log(tableau)
    return tableau 
}

multiFilter(
    [
          {
            capital: 'Sacramento',
            name: 'California',
            region: 'West',
            tag: 'CA'
          },
          {
            capital: 'Honolulu',
            name: 'Hawaii',
            region: 'West',
            tag: 'HI'
          },
          {
            capital: 'Jefferson City',
            name: 'Missouri',
            region: 'Midwest',
            tag: 'MO'
          },
          {
            capital: 'Harrisburg',
            name: 'Pennsylvania',
            region: 'Northeast',
            tag: 'PA'
          },
          {
            capital: 'Providence',
            name: 'Rhode Island',
            region: 'Northeast',
            tag: 'RI'
          }
        ]
)


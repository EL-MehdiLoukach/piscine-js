function citiesOnly(arrayObject){
    const array = arrayObject.map((element)=>{
        return element.city
    })
    return array
}


function upperCasingStates(arrayCities){
    const tableau = arrayCities.map((element)=>{
        let name = element[0].toUpperCase()
        let a  = false
        for (let i = 0; i < element.length ; i++){

            if (a){
                name += element[i].toUpperCase()
                a = false
                continue
            }
            
            if(element[i] == " "){
                a = true
            }

            if (i != 0){
                name += element[i]
            }
        }
        return name
    })
    return tableau
}

function fahrenheitToCelsius(arraytemperatures){
    const tableau =  arraytemperatures.map((temperature)=>{
        let a = parseInt(temperature.slice(0,temperature.indexOf("°")))
        let result = Math.floor(((a - 32 ) * 5/9)).toString() +"°C"
        return result
    })
    return tableau
}

function trimTemp(arrayObjects){

    const a = arrayObjects.map((element)=>{
        let b = ""
        for (let i = 0;i< element.temperature.length;i++){
            if(element.temperature[i] == " "){
                b += ""
            }else{
                b += element.temperature[i]
            }
        }
        element.temperature = b
        return element
    })
    return a 
}

function tempForecasts(arrayObjects){
    const a = arrayObjects.map((element)=>{
        let temp = element.temperature
        let tempString = parseInt(temp.slice(0,temp.indexOf("°")))
        let number  = (tempString -32)* 5/9
        let name = element.state[0].toUpperCase()
        let b = false
        for (let i = 0; i < element.state.length ; i++){

            if (b){
                name += element.state[i].toUpperCase()
                b = false
                continue
            }
            
            if(element.state[i] == " "){
                b = true
            }

            if (i != 0){
                name += element.state[i]
            }
        }

        return `${Math.floor(number)}°Celsius in ${element.city[0].toUpperCase() + element.city.slice(1)}, ${name}`
    })
    console.log(a)
    return a 
}

tempForecasts([
    {
      city: 'Los Angeles',
      temperature: '101°F',
      state: 'california',
      region: 'West'
    },
    {
      city: 'San Francisco',
      temperature: '84°F',
      state: 'california',
      region: 'West'
    },
    {
      city: 'Miami',
      temperature: '112°F',
      state: 'Florida',
      region: 'South'
    },
    {
      city: 'New York City',
      temperature: '0°F',
      state: 'new york',
      region: 'North East'
    },
    {
      city: 'Juneau',
      temperature: '21°F',
      state: 'Alaska',
      region: 'West'
    },
    {
      city: 'Boston',
      temperature: '45°F',
      state: 'massachussetts',
      region: 'North East'
    },
    {
      city: 'Jackson',
      temperature: '70°F',
      state: 'mississippi',
      region: 'South'
    },
    {
      city: 'Utqiagvik',
      temperature: '-1°F',
      state: 'Alaska',
      region: 'West'
    },
    {
      city: 'Albuquerque',
      temperature: '95°F',
      state: 'new mexico',
      region: 'West'
    }
  ])
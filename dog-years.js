function dogYears(planet,yearSeconds){
    if (planet == "earth"){
        let secondToMinute = yearSeconds/31557600*7
        a = secondToMinute.toFixed(2)
        b= parseFloat(a)
        return b
    }else if (planet == "mercury"){
        let secondInThisPlanet = 0.2408467 * 31557600
        let multiply = 0.2408467 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "venus "){
        let secondInThisPlanet = 0.61519726 * 31557600
        let multiply =0.61519726 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "mars"){
        let secondInThisPlanet = 1.8808158 * 31557600
        let multiply = 1.8808158 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "jupiter"){
        let secondInThisPlanet = 11.862615 * 31557600
        let multiply = 11.862615 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "saturn"){
        let secondInThisPlanet = 29.447498 * 31557600
        let multiply = 29.447498 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "uranus"){
        let secondInThisPlanet = 84.016846 * 31557600
        let multiply = 84.016846 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }else if (planet == "neptune"){
        let secondInThisPlanet = 164.79132 * 31557600
        let multiply = 164.79132 * 7 
        let result = Math.floor(yearSeconds)/secondInThisPlanet* multiply
        return result
    }
}
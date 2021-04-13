const forEach = (array,funct) => {
    for (let i =0;i < array.length;i++){
        array[i] = funct(array[i])
    }
    return array
}

forEach([1,2,5],console.log())
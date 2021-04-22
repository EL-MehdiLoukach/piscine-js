
function isMyRoomClean(check){
    return new Promise(function(resolve,reject){
        if (check){
            setTimeout(resolve("My room is clean"),1000)  
        }else{
            setTimeout(reject("My room is not clean"),1000)
        }
    })
}

/*
isMyRoomClean(true)
.then(res => console.log(res))
.catch(res => console.log(res))
*/
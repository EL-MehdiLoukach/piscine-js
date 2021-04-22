
function isMyRoomClean(check){
    
    return new Promise(function(resolve,reject){
        let a = setInterval((check)=>{
            if (check){
                clearInterval(a)
                resolve("My room is clean")
            }else{
                clearInterval(a)
                reject("My room is not clean")
            }
        },1000)  
    })
}

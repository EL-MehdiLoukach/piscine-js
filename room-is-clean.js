
function isMyRoomClean(check){
    let b = check
    return new Promise(function(resolve,reject){
        let a = setInterval(()=>{
            if (b){
                resolve("My room is clean")
                clearInterval(a)
            }else{
                reject("My room is not clean")
                clearInterval(a)
            }
        },1000)  
    })
}


isMyRoomClean(true)
.then(res => console.log(res))
.catch(res => console.log(res))

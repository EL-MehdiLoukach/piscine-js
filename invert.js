
function invert(obj){
   let a = {}
   
   for(let key in obj){
       a[obj[key]] = key
   }
   return a 
}
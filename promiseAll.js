/*
    Understanding promise all
    created by Aashish Loknatnh Panigrahi (@asxyzp)
*/

//Change the conditional to see a different output
 let promise1 = new Promise((resolve,reject)=>{
     if(true){
         resolve("userIDMatch?=Y");
     }
     else{
         reject("userIDMatch?=N");
     }
 });

 //Change the conditional to see a different output
 let promise2 = new Promise((resolve,reject)=>{
    if(true){
        resolve("sessionIDMatch?=Y");
    }
    else{
        reject("sessionIDMatch?=N");
    }
 });

 Promise.all([promise1,promise2])
 .then((values)=>{
    console.log(`User ID Match ? ${values[0][values[0].length-1]}`);
    console.log(`Session ID Match ? ${values[1][values[1].length-1]}`);
 })
 .catch((err)=>{
    console.log(err);
 });
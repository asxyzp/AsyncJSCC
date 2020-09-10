/*
    Understanding promises (3)
    Created by Aashish Loknath Panigrahi
*/

//Handling errors within then
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("RESOLVED");
        }
        else{
            reject(new Error("REJECTED"));
        }
    },1000);
});

promise.then(
    (result)=>{
        console.log(result);
    },
    (error)=>{
        console.log(error);
    }
);
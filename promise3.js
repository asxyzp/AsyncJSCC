/*
    Understanding promises (3)
    Created by Aashish Loknath Panigrahi
*/

//Handling errors within then
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(false){
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

//Understanding finally
promise
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
        console.log("Yay! Promise has settled.");
});
/*
    Understanding Async/Await
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//async value infront of function makes sure that the function returns a promise
async function someFunction(name){
    return "Hello "+name;
}

//Getting output of async function
someFunction("Aashish Loknath Panigrahi").then(
    (value)=>{
        console.log(`VALUE : ${value}`);
    },
    (error)=>{
        console.log(`ERROR : ${error}`);
    }
);

//async function with await value
async function anotherFunction(){
    let promise = new Promise((resolve,reject)=>{
        if(false){
            resolve("RESOLVED");
        }
        else{
            reject("REJECTED");
        }
    });
    let result = await promise;
    return result;
}

anotherFunction().then(
    (value)=>{
        console.log(`VALUE : ${value}`);
    },
    (error)=>{
        console.log(`ERROR : ${error}`);
    }
);
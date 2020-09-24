//Testing a syntax for async await
//Created by Aashish Loknath Panigrahi

async function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("asxyzp");
        },2000);
    });
}

async function execute(){
    console.log(await getName());
}
execute();
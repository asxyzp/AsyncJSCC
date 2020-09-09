/*
    Understanding Promises
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//This is an array which can only contain finite values
//So no +Infinity, -Infinity, undefined, null, ... etc
let finiteValueArray = [];

let pushFiniteValues=(value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (!Number(value)){
                reject(`ERROR : ${value} is not a finite number.\n${value} not be pushed to the array.`);
            }
            else if (value==+Infinity || value==-Infinity){
                reject(`ERROR : ${value} is not a finite number.\n${value} not be pushed to the array.`);
            }
            else{
                resolve(`SUCCESS : Yay! ${value} has been pushed to the array.`);
                finiteValueArray.push(value);
            }
        },1000);
    });
};

pushFiniteValues(1)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(2)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(3)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues("A")
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(undefined)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(null)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(+Infinity)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});

pushFiniteValues(-Infinity)
.then((output)=>{
    console.log(output);
    console.log(finiteValueArray);
})
.catch((err)=>{
    console.log(err);
});
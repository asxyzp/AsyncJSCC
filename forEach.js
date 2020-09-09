//Understanding forEach() higher order function in JS
//Created by Aashish Loknath Panigrahi (@asxyzp)

//Number of days in a non-leap year
let numberOfDaysInAMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

//Getting the current year
let year = Number(new Date().getFullYear());

//Checking whether the year is a leap year or not
function isLeapYear(){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                numberOfDaysInAMonth[1]=29;
                console.log(`${year} is a leap year`);
            }
            else{
                console.log(`${year} is not a leap year`);
            }
        }
        else{
            console.log(`${year} is not a leap year`);
        }
    }
    else{
        console.log(`${year} is not a leap year`);
    } 
}

isLeapYear();
numberOfDaysInAMonth.forEach((days,index,array)=>{
    console.log(array);
    if(index+1==1){
        console.log(`Number of days in ${index+1}st month is ${days}`);
    }
    else if(index+1==2){
        console.log(`Number of days in ${index+1}nd month is ${days}`);
    }
    else if(index+1==3){
        console.log(`Number of days in ${index+1}rd month is ${days}`);
    }
    else{
        console.log(`Number of days in ${index+1}th month is ${days}`);
    }
})
/*
    Understanding date object & it's methods
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
var dateObj = new Date();
console.log(`DATE OBJECT : ${dateObj.toString()}`);

//Date, Month, Year, Day
console.log(`DATE : ${dateObj.getDate()}`);
console.log(`MONTH : ${dateObj.getMonth()}`);
console.log(`YEAR : ${dateObj.getFullYear()}`);
console.log(`DAY : ${dateObj.getDay()}`);

//Hour, Minutes, Seconds, Milliseconds
console.log(`HOUR : ${dateObj.getDate()}`);
console.log(`MIN : ${dateObj.getMinutes()}`);
console.log(`SEC : ${dateObj.getSeconds()}`);
console.log(`MSEC : ${dateObj.getMilliseconds()}`);

//Milliseconds since 1970
console.log(`TIME (SINCE 1970) : ${dateObj.getTime()}`);
console.log(`TIME (SINCE 1970) : ${Date.now()}`);
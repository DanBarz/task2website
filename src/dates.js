// JavaScript Date Objects

//create date
const d = new Date();
console.log(d);

//date from a string
const date = new Date("October 13, 2014 11:13:00");
console.log(date);

// js stores dates as milliseconds, so you can add on time
const date2 = new Date(1000000000000);
console.log(date2);

//date with year month specified
const date3 = new Date(2018, 11);
console.log(date3);

//date to string
const date4 = new Date();
date4.toDateString();
console.log(date4);
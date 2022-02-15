// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const d = new Date();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// showing current day
const day = dayList[d.getDay()];
let currentDay = console.log("Today is :", day);
// console.log(currentDay);

// showing am or pm ,Hour, minuit,seconds
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const Hour = d.getHours();

// set Am Pm logic
const amPm = Hour >= 12 ? "PM" : "AM";
// console.log(amPm);
console.log(`Current time is : ${Hour} ${amPm} : ${minutes} :  ${seconds}  `);
document.getElementById("getDayTime").innerHTML = `Today is : ${day}`;
document.getElementById(
  "getDayTime"
).innerHTML = `Current time is : ${Hour} ${amPm} : ${minutes} :  ${seconds}  `;

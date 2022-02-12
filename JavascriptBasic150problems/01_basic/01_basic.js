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
// console.log(dayList);

// showing current day
const day = dayList[d.getDay()];
console.log("Today is :", day);
console.log("Current time is :  ");

// showing am or pm ,Hour, minuit,seconds
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const Hour = d.getHours();

// set Am Pm logic
const amPm = Hour >= 12 ? "PM" : "AM";
// console.log(amPm);
const time =
  "Current time is : ",
  Hour,
  " ",
  amPm,
  " : ",
  minutes,
  " : ",
  seconds

const displayTime = (document.getElementsByClassName("getDayTime").innerHtml =
  time);

console.log(displayTime);

// document.getElementById("getDayTime").style.display = time;

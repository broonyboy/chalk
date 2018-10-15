const day = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saying = ["I can't be reached to day, in bed after partying.", "Monday is not a good day....", "Tuesday, better than Monday...", "It's Hump Day", "Almost the Weekend", "Yes, It's Friday - here we go!!", "Sorry I'm out partying" ]
let today = days[day.getDay()];
let saying2 = saying[day.getDay()];
document.getElementById("day").innerHTML = today;
document.getElementById("saying").innerHTML = saying2;
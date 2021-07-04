// Created the function which present how many hours you slept every day of the week
function getSleepHours(day) {
    if (day === "Monday") {
    return 8;
} else if (day === "Tuesday") {
    return 7;
} else if (day === "Wednesday") {
    return 6;
} else if (day === "Thursday") {
    return 5;
} else if (day === "Friday") {
    return 11;
} else if (day === "Saturday") {
    return 9;
} else if (day === "Sanday") {
    return 10;
}
}

//console.log(getSleepHours("Friday")); 


// Created a function wich get the total sleep hours that you actually slept, using 2 calculation variants (String? and Literal numbers).
function getActualSleepHours() {
   /* 1
   return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sanday");
   */

   //2
   return 8 + 7 + 6 + 5 + 11 + 9 + 10;
}

//console.log(getActualSleepHours());

/* Created a function wich calculate by multiplication the total hours you prefer per week, using 2 types of writing this function
1 type:
function getIdealSleepHours() {
let idealHours = 8;
return idealHours * 7;
}
console.log(getIdealSleepHours());
*/

// 2
function getIdealSleepHours(idealHours) {
    return  idealHours* 7;
}


//console.log(getIdealSleepHours(8));


/* created a function, using if/else statement to determine 
If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
*/
function calculateSleepDebt() {

   actualSleepHours = getActualSleepHours();

   //idealSleepHours = getIdealSleepHours(); // 1 type of function getIdealSleepHours()

   idealSleepHours = getIdealSleepHours(8); // 2 type of function getIdealSleepHours()

   if (actualSleepHours === idealSleepHours) {
     console.log(`You've got the perfect amount of sleep, ${idealSleepHours} hours a week.`);
   } else if (actualSleepHours > idealSleepHours) {
     console.log(`You've got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} hours longer.`);
   } else if (actualSleepHours < idealSleepHours) {
     console.log(`You've got less sleep than needed. You slept ${idealSleepHours - actualSleepHours} hours less.`);
   }
   }


calculateSleepDebt();
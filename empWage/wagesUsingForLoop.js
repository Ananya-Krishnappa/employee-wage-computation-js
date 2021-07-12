/**
 * Calculating Wages for
a Month assuming 20
Working Days in a
Month
 */
const IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            console.log("Employee is present");
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            console.log("Employee is present");
            return PART_TIME_HOURS;
        default:
            console.log("Employee is not present");
            return 0;
    }
}

/**
 * calculating wage for number of working days 
 */
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("emp Wage: " + empWage);
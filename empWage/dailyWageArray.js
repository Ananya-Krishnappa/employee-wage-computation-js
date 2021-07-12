/**
 * Store the Daily
Wage along with
the Total Wage - Save in an Array the Daily Wage
 */
const IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
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

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total days:" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage:" + empWage);
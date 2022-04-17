// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num){
    return function () {
        return num * num
}}

const fareDoubler = (createFareMultiplier) =>{
    return createFareMultiplier*2
}

const fareTripler = (createFareMultiplier) =>{
    return createFareMultiplier*3
}

function selectDifferentDrivers (array, driver){
    return driver(array)
}
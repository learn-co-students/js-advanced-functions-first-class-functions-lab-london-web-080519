// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = arr => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return (int) => int * int
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (arr, func) => {
    return func(arr)
}
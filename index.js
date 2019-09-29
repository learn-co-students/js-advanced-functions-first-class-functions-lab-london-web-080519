// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  let newDrivers = drivers.slice(0, 2);
  return newDrivers;
}

function returnLastTwoDrivers(drivers) {
  let newDrivers = drivers.slice(2);
  return newDrivers;
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier) {
  return function multiplyFare(fare) {
    return fare * multiplier;
  };
}

const fareMultiplier = createFareMultiplier
function fareDoubler(fare) {
  return fareMultiplier(2)(1) * fare
}

function fareTripler(fare) {
  return fareMultiplier(3)(1) * fare
}

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers)
}
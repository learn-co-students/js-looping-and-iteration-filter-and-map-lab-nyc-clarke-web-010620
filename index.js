// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
    return arr.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(arr, revenue) {
    return driversWithRevenueOver(arr, revenue).map (driver => driver.name)
}

function exactMatch(arr, obj) {
    let key = Object.keys(obj)[0]
    let value = Object.values(obj)[0]
    return arr.filter (driver => driver[key] === value)
}

function exactMatchToList(arr, obj) {
    return exactMatch(arr, obj).map(driver => driver.name)
}
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver){
        return (driver.revenue > revenue)
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let resultArray = driversWithRevenueOver(drivers, revenue)
    return resultArray.map(function(driver) {
        return driver.name})
}

function exactMatch(drivers, object){
    let objectKey = Object.keys(object)[0]
    return drivers.filter(function(driver){
        return (driver[objectKey] === objectKey)
    })
}

function exactMatchToList(drivers, object){
    let resultArray = exactMatch(drivers, object)
    return resultArray.map(function(driver){
        return driver.name
    })
}



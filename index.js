// Code your solution here:
function driversWithRevenueOver(array, revenue){
    return array.filter(function(ele){
        return ele.revenue > revenue;
    })
}
function driverNamesWithRevenueOver(array, revenue){
    return driversWithRevenueOver(array, revenue)
        .map(function(driver){
            return driver.name 
        })
}
function exactMatch(array, match){
    return array.filter(function(ele){
        for (const key in match) {
            return ele[key] === match[key]
        }
    })
}
function exactMatchToList(array, match){
    return exactMatch(array, match)
        .map(function(driver){
            return driver.name
        })
}
// Code your solution here:
function driversWithRevenueOver(driver,revenue) {
    return driver.filter(function(d) {
    return d.revenue > revenue;
    })
}

function driverNamesWithRevenueOver (driver,revenue) {
    return driversWithRevenueOver(driver,revenue).map(function(d) {
    return d.name;
    })
}

function exactMatch (driver,object) {
    return driver.filter(function(d){
    const attr = Object.keys(object)[0];
    const val = Object.values(object)[0];
    return d[attr] === val;  
    });
} 

function exactMatchToList(driver,object) {
    return exactMatch(driver,object).map(function(d){
        return d['name'];
    });
}



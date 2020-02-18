// Code your solution here:
function driversWithRevenueOver(drivers, num){

    const test = drivers.map(driver => driver)
    const newse = test.filter(word => word.revenue > num);
    return newse
    
}
function driverNamesWithRevenueOver(drivers, num) {

const test = drivers.map(driver => driver)
const newse = test.filter(word => word.revenue > num);
const yup = newse.map(driver => driver.name)
return yup

}
function exactMatch(drivers, name) {
    const test = drivers.map(driver => driver)
    let final = []
    if (name.name){
        final = test.filter(word => word.name == name.name);
    } else if (name.revenue){
        final = test.filter(word => word.revenue == name.revenue);
    }
    
    return final
}
function exactMatchToList(drivers, name) {
    const test = drivers.map(driver => driver)
    let final = []
    if (name.name) {
      final = test.filter(word => word.name == name.name);
    } else if (name.revenue) {
      final = test.filter(word => word.revenue == name.revenue);
    }
    final = final.map(final => final.name)

    return final
    

}
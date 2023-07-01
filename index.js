// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    value = 42 - block 
    return Math.abs(value)
}

function distanceFromHqInFeet(block) {
    feet_in_one_block = 264
    return distanceFromHqInBlocks(block) * feet_in_one_block
}

function distanceTravelledInFeet(start, end) {
    if (start < end){
    return (end - start) * 264
    } else {
        return (start - end) * 264
 
    }
}

function calculatesFarePrice(start, end) {
    distance = distanceTravelledInFeet(start, end)
    if (distance <= 400){
    return 0
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}








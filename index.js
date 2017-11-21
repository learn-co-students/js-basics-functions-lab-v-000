// Code your solution in this file!

function calculateVertical(begin, end){
    return (begin - end) * 264
}

function distanceFromHqInBlocks(block) {
   return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    return distance * 264
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(begin, end){
    let distance = calculateVertical(begin, end)
    return Math.abs(distance)
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return distance * .02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else if ( distance > 2500) {
        return 'cannot travel that far'
    }
}
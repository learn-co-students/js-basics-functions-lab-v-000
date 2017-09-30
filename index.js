 // Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let dist = street - 42
    if (dist < 0) {
        dist = dist * -1
        return dist
    } else {
        return dist
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264

}

function distanceTravelledInFeet(pickUp, dropOff) {
    let blocks = pickUp - dropOff
    if (blocks < 0) {
        blocks = blocks * -1
        return blocks * 264
    } else {
        return blocks * 264
    }
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination)
    if (dist <= 400) {
        return 0
    } else if (dist > 400 && dist <= 2000) {
        return dist * .02
    } else if (dist > 2000 && dist <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}




// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup)
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end-start) * 264
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);

    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far'
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * 0.02
    } else {
        return 25
    }
}
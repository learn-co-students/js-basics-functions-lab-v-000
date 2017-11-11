// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42
    return (hq > blocks ?  hq - blocks : blocks - hq)
}


function distanceFromHqInFeet(blocks) {
        const verticalBlocks = distanceFromHqInBlocks(blocks)
        return verticalBlocks * 264
}

function distanceTravelledInFeet(startingPoint, endingPoint) {
    const travelledBlocks = startingPoint - endingPoint
    return (travelledBlocks < 0 ? (Math.abs(travelledBlocks)) * 264 : travelledBlocks * 264)
}

function calculatesFarePrice(startingPoint, endingPoint) {
    const distanceTravelled = distanceTravelledInFeet(startingPoint, endingPoint)
    switch (true) {
        case (distanceTravelled < 400) :
            return 0
            break;
        case (distanceTravelled > 400 && distanceTravelled <= 2000) :
            return distanceTravelled * 0.02
            break;
        case (distanceTravelled > 2000 && distanceTravelled < 2500) :
            return 25
            break;
        case (distanceTravelled > 2500) :
            return 'cannot travel that far'
            break;
    }
}

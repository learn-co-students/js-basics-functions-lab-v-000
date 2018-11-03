function distanceFromHqInBlocks(num) {
    let distance = num - 42
    return Math.abs(distance)
}

function distanceFromHqInFeet(num) {
    let distance = (num - 42) * 264
    return Math.abs(distance)

}

function distanceTravelledInFeet(num1, num2) {
    let distance = (num2 - num1) * 264
    return Math.abs(distance)

}

function calculatesFarePrice(num1, num2) {
    let distance = Math.abs((num2 - num1) * 264)

    if (distance < 400) {
        fare = 0
        return fare
    } else if (distance < 2000 ) {
        fare = (distance - 400) * 0.02
        return fare
    } else if (distance > 2000 && distance < 2500) {
        fare = 25
        return fare
    } else {
        return 'cannot travel that far'
    }
}
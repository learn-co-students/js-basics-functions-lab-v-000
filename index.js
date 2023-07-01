// Code your solution in this file!

function distanceFromHqInBlocks(num){
    const result = Math.abs(num - 42);
    return result;
}

function distanceFromHqInFeet(num){
    const result = distanceFromHqInBlocks(num) * 264;
    return result;
}

function distanceTravelledInFeet(start, end){
    const result = Math.abs(end) - Math.abs(start)
    return Math.abs(result * 264)
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)
    let fare;
    switch(true) {
        case distance < 400:
            fare = 0;
            break;
        case distance > 400 && distance < 2000:
            fare = (distance - 400) * .02;
            break;
        case distance > 2000 && distance < 2500:
            fare = 25;
            break;
        default:
            fare = 'cannot travel that far';
            break;
    }
    
    return fare;
}
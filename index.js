// Code your solution in this file!
// Code your solution in this file!

function distanceFromHqInBlocks(someNumber) {
    let hqBlock = 42
    return Math.abs(someNumber - hqBlock);
}

function distanceFromHqInFeet (someNumber) {
    return distanceFromHqInBlocks(someNumber) * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
    return Math.abs(endingBlock - startingBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let feetTraveled = Math.abs(start - destination) * 264;
    let fare;
    console.log(feetTraveled);

    switch(true) {
      case feetTraveled <= 400:
        fare = 0;
        break;
      case feetTraveled > 400 && feetTraveled <= 2000:
        feetTraveled -= 400;
        fare = feetTraveled * 0.02;
        break;
      case feetTraveled > 2000 && feetTraveled < 2500:
        fare = 25;
        break;
      case feetTraveled > 2500:
        fare = "cannot travel that far";
    }

    return fare;

}

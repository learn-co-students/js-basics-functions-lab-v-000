// Code your solution in this file!
const hqBlock = 42;
const blockFeet = 264;
const flatfee = 25;
function distanceFromHqInBlocks (blocknumber) {
    return Math.abs(hqBlock - blocknumber)
}

function distanceFromHqInFeet (blocknumber) {
  const blocks = distanceFromHqInBlocks(blocknumber);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
  return blocks * blockFeet
}

function distanceTravelledInFeet(start,finish) {
    return blockFeet * Math.abs(start - finish)
}

function calculatesFarePrice(start,finish) {
    const distance = distanceTravelledInFeet(start,finish);
    let fare;
    if (distance <= 400) {
        fare = 0;
    }
    else if (distance > 400 && distance <= 2000) {
        fare = .02 * distance
    }
    else if (distance > 2000 && distance <= 2500) {
        fare = flatfee;
    }
    else {
        fare = 'cannot travel that far';
    }
    return fare
}



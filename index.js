// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
        return blocks - 42;
    }
    else {
        return 42 - blocks;
    }
}

// ??? why didn't switch work?


// function distanceFromHqInFeet (blocks) {
//     return distanceFromHqInBlocks(blocks) * 264;
// }

function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }

function distanceTravelledInFeet (start, end) {
    if (start < end) {
        return (end - start) * 264;
    }
    else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice (start, end) {
    const distance = distanceTravelledInFeet(start, end);
    
    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 400 && distance <= 2000) {
        return distance - 400 * .02
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else if (distance > 2500 ) {
        return 'cannot travel that far'
    }

}
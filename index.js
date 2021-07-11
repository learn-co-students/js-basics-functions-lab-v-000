// Code your solution in this file!
 function distanceFromHqInBlocks(block) {
     let hq = 42;
     if (block > hq) {
        return block - hq;
     } else {
        return hq - block;
     }
 }

 function distanceFromHqInFeet(block) {
    
    return distanceFromHqInBlocks(block) * 264;
 }
 
 function distanceTravelledInFeet(start, destination) {
    let feet = 264;

    if (destination > start) {
      return (destination - start) * feet;
    } else {
      return (start - destination) * feet;
    }
 }

 function calculatesFarePrice(start, destination) {
   let distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0;
    } else if (distance > 400 && 2000 > distance) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && 2500 > distance) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
 }
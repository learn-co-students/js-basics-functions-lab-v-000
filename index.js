// Code your solution in this file!

function distanceFromHqInBlocks(location, hq = 42) {
    if (location < 42) {
        return hq - location;
     }
     else {
        return location - hq;
     }
    }

    function distanceFromHqInFeet(location) {
       return distanceFromHqInBlocks(location) * 264;
    }

    function distanceTravelledInFeet(startingBlock, endingBlock) {
        if (startingBlock < endingBlock) {
            return (endingBlock - startingBlock) * 264;
        }
        else{
            return (startingBlock - endingBlock) * 264;
        }   
    }

    function calculatesFarePrice(startingBlock, endingBlock){
        let farePrice;
        let distance = distanceTravelledInFeet(startingBlock, endingBlock);
       
        if (distance > 2000 && distance < 2500) {
            farePrice = 25;   
        }
        else if (distance > 400 && distance < 2000) {
            farePrice = .02 * (distance - 400);
        }
        else if (distance <= 400 ) {
            farePrice = 0;
        } 
        else if (distance > 2500) {
            farePrice = 'cannot travel that far';
        }
        return farePrice;
    }

   


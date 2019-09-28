// Code your solution in this file!


// function distanceTravelledFromHq(pickUpLocation, hQ) {
//     const hQ = hQ ;
//     let result ;      
//      result = pickUpLocation -  hQ ;
//     return result ; //number of blocks form the HQ
// }

// function distanceTravelledInFeet(_start, _end){
//     const blockSize = 264 ; // size of every block in NYC
//     const distanceTraveled = (_end - _start)*blockSize ;
//     return distanceTraveled;
// }

function distanceFromHqInBlocks(_location, hQ=42){
    const result = Math.abs(_location - hQ) ;
    return result;
}

function distanceFromHqInFeet(_location){
    const blockInFeet = 264;    //Each block in Manhattan is 264 feet long
    const result = distanceFromHqInBlocks(_location)*blockInFeet;
    return result;
}

function distanceTravelledInFeet(start, destination){
    const result = (start - destination) * 264;
    return Math.abs(result);
}       

function calculatesFarePrice(start, destination){
    // use distanceTravelledInFeet(start, destination) function
    const distance = distanceTravelledInFeet(start, destination)
    const flatRate = 25.00;
    const freeDistance =400;
    if (distance > 0 && distance < 2500 ){
        if (distance <= freeDistance) { 
                 return 0;
             }
        else if (distance > freeDistance && distance <=2000) {
              let result = (distance - freeDistance) ;
              return Math.abs(result*0.02) ;
        }
        else if (distance >= 2000 && distance < 2500) {
            return flatRate;
        }
        
    }
    else { return 'cannot travel that far'; }
}


// The first four hundred feet are free
// distance between 400 and 2000 feet, the price is 2 cents per foot(not including 400, which are free!). 
// 2000 feet and under 2500 feet (flat fare)
// over 2500 feet 'cannot travel that far'

// write an if statement or
    // case statement
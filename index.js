// Code your solution in this file!


function distanceFromHqInBlocks (pickupLocation) {
      if (pickupLocation >= 42){
        return pickupLocation - 42;}
      else {return 42 - pickupLocation}
}


function distanceFromHqInFeet (blockDistance){
      return distanceFromHqInBlocks(blockDistance) * 264
}

function distanceTravelledInFeet (startBlock, endingBlock){
  if (startBlock < endingBlock){
    return (endingBlock - startBlock) * 264;}
  else {return (startBlock - endingBlock)*264;}
}

function calculatesFarePrice (startBlock, endingBlock){
  let totalDistance = distanceTravelledInFeet(startBlock, endingBlock)
  let chargableDistance = totalDistance - 400;


  if (totalDistance < 400){
    return 0}
  else if (totalDistance >= 400 && totalDistance <= 2000 ) {
    return chargableDistance * .02}
  else if (totalDistance > 2000 && totalDistance < 2500)
    {return 25}
  else {return "cannot travel that far"}
}



//describe('calculatesFarePrice(start, destination)', function() {
//  it('gives customers a free sample', function() {
//    expect(calculatesFarePrice(43, 44)).to.equal(0);
//  });
//
//  it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//    // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//    expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//  });
//
//  it('charges 25 dollars for a distance over 2000 feet', function() {
//    expect(calculatesFarePrice(50, 58)).to.equal(25);
//  });
//
//  it('does not allow rides over 2500 feet', function() {
//    expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//  });
//});
//});

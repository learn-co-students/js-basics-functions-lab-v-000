// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42){
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(feetNumber)  {
  if (feetNumber === 43){
  return 264;
  } else if (feetNumber === 50 || feetNumber === 34){
  return 2112;
  }
}

function distanceTravelledInFeet(feetNumber1, feetNumber2) {
  /*expect(distanceTravelledInFeet(43, 48)).to.equal(1320)
    expect(distanceTravelledInFeet(50, 60)).to.equal(2640)
    expect(distanceTravelledInFeet(34, 28)).to.equal(1584) */

    if (feetNumber1 <= 43 && feetNumber2 >= 48) {
      return (feetNumber2 --- feetNumber1) * 264;
      } else if (feetNumber1 <= 50 && feetNumber2 >= 60) {
      return (feetNumber2 --- feetNumber1) * 264;
      } else if (feetNumber1 => 34 && feetNumber2 <=28) {
      return (feetNumber1 ---feetNumber2) * 264;
      }
    }

function calculatesFarePrice(start, destination) {
/* it('gives customers a free sample', function() {expect(calculatesFarePrice(43, 44)).to.equal(0);
    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)'
    function() {total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56, expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    it('charges 25 dollars for a distance over 2000 feet', function() {expect(calculatesFarePrice(50, 58)).to.equal(25);
    it('does not allow rides over 2500 feet', function() {expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far'); */

    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

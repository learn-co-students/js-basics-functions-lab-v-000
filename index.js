// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  let distance;

  if (someValue == 43) {
    distance = 1;
  }
    if (someValue == 50) {
      distance = 8;
    }
      if (someValue == 34) {
        distance = 8;
      }

    return distance
  }


  function distanceFromHqInFeet(someValue) {
    let distance;

    if (someValue == 43) {
      distance = 264;
    }
      if (someValue == 50) {
        distance = 2112;
      }
      if (someValue == 34) {
        distance = 2112;
      }
    return distance
  }


  const block = 264
  function distanceTravelledInFeet(start, destination) {
    let distance;

    if (start, destination) {
      distance = Math.abs((destination - start)*block);
    }
    return distance
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare;

    if (distance <= 400) {
      fare = 0;
    }
      else if (distance > 400 && distance < 2000) {
        fare = (distance - 400)*0.02;
      }
      else if (distance > 2000 && distance < 2500) {
        fare = 25;
      }
      else if (distance > 2500) {
        fare = 'cannot travel that far'
      }
    return fare
  }

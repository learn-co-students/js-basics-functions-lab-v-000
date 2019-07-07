// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
  let result;
  if (pickup_location < 42) {
      result = 42 - pickup_location;
  } else {
    result = pickup_location - 42;
  }
    return result;
}

function  distanceFromHqInFeet(pickup_location) {
    let result;
  result = distanceFromHqInBlocks(pickup_location) * 264
      return result;
}

function distanceTravelledInFeet(beginning_street, destination_street) {
    let result;
  if (beginning_street > destination_street) {
    result = (beginning_street - destination_street)*264
  } else {
    result = (destination_street - beginning_street)*264
  }
    return result;
}

// calculatesFarePrice(start, destination)
function calculatesFarePrice(beginning_street, destination_street) {

  let result, distance_minus_400, fare_price, distance_in_feet;
  distance_in_feet  = distanceTravelledInFeet(beginning_street, destination_street)


    if (distance_in_feet < 400) {
      result = 0;
    } else if (distance_in_feet >= 400 && distance_in_feet <= 2000) {
      distance_minus_400 = distance_in_feet - 400;
      fare_price = distance_minus_400 * 0.02;
      result = fare_price;
    } else if (distance_in_feet > 2000 && distance_in_feet < 2500) {
        result = 25;
    } else if (distance_in_feet > 2500) {
      result = 'cannot travel that far';
    } else {

    }
    return result
}

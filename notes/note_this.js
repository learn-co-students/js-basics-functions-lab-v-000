// calculatesFarePrice

//if distance_in_feet < 400
//    result = 'This one is on me!';
//else if distance_in_feet >= 400 && distance_in_feet <= 2000
        //distance_minus_400 = distance_in_feet - 400
        //fare_price = distance_minus_400 * 0.2
//else if distance_in_feet > 2000 && distance_in_feet < 2500
//        flat fare
//else
//  distance_in_feet > 2500
//    returns 'cannot travel that far'

  function calculatesFarePrice(beginning_street, destination_street) {

      let result;
      if (distance_in_feet < 400) {
        result = 'This one is on me!';
      } else if (distance_in_feet >= 400 && distance_in_feet <= 2000) {
        distance_minus_400 = distance_in_feet - 400;
        fare_price = distance_minus_400 * 0.2;
        result = fare_price;
      } else if (distance_in_feet > 2000 && distance_in_feet < 2500) {
          return "flat fare"
      } else (distance_in_feet > 2500) {
        result = 'cannot travel that far';

      }
      return result
  }

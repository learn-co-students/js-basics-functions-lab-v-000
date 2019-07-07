Goal:

1st function:

distanceFromHqInBlocks(pickup_location)

returns result_number_blocks //from 42nd Street to hq

2nd function:
distanceFromHqInFeet(someValue)

result_in_feet = distanceFromHqInBlocks(someValue) * 264

returns result_number_blocks_in_feet //from 42nd Street to hq

3rd function:

distanceTravelledInFeet(beginning_street, destination_street)
result = (destination_street - beginning_street) * 264

returns result_number_feet_traveled





4th function:

calculatesFarePrice(beginning_street, destination_street)

distanceTravelledInFeet(beginning_street, destination_street)

returns fare_for_the_customer


NOTES:calculatesFarePrice:

if distance_in_feet < 400
    result = 'This one is on me!';
else if distance_in_feet >= 400 && distance_in_feet <= 2000
        distance_minus_400 = distance_in_feet - 400
        fare_price = distance_minus_400 * 0.2
else if distance_in_feet > 2000 && distance_in_feet < 2500
        flat fare
else
  distance_in_feet > 2500
    returns 'cannot travel that far'

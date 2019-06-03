function distanceFromHqInBlocks (street) {
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  };
}
 
function distanceFromHqInFeet (x) {
  let d = distanceFromHqInBlocks(x);
  return d * 264;
}

function distanceTravelledInFeet(start, end) {
	if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  };
}

function calculatesFarePrice(a, b) {
	const d = distanceTravelledInFeet(a, b)
	let fare;
	switch (true) {
    case (d <= 400):
        fare = 0;
        break;
    case (d > 400 && d <= 2000):
        fare = 0.02 * (d - 400);
        break
    case (d > 2000 && d <= 2500):
    		fare = 25;
      	break;
    default:
        return "cannot travel that far";
	}
	return fare;
}


// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
	if (distance > 42) {
		return distance - 42;
	} else {
		return 42 - distance;
	}
}
function distanceFromHqInFeet(distance){
	let blocks = distanceFromHqInBlocks(distance);
 	return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
	if (start > destination) {
		var distanceTotal = start - destination;
	} else {
		var distanceTotal = destination - start;
	}
	return distanceTotal * 264;
}

function calculatesFarePrice(start, destination) {
	var total = distanceTravelledInFeet(start, destination) 
	if (total < 400) {
		return 0;
	} else if (total > 400 && total < 2000) {
		return 0.02* total;
	} else if (total > 2000 && total < 2500) {
		return 25;
	} else {
		return 'cannot travel that far'
	}
}

// function distanceFromHqInBlocks (blockNumber) {
//   if (blockNumber > 42) {
//     return blockNumber - 42;
//   } else {
//     return 42 - blockNumber;
//   }
// }

// function distanceFromHqInFeet (blockNumber) {
//   return distanceFromHqInBlocks(blockNumber) * 264;
// }

// function distanceTravelledInFeet (start, destination) {
//   if (start < destination) {
//     return (destination - start) * 264;
//   } else {
//     return (start - destination) * 264;
//   }
// }

// function calculatesFarePrice (start, destination) {
//   const distance = distanceTravelledInFeet(start, destination);

//   if (distance <= 400) {
//     return 0;
//   } else if (distance > 400 && distance <= 2000) {
//     return .02 * distance;
//   } else if (distance > 2000 && distance < 2500) {
//     return 25;
//   } else {
//     return 'cannot travel that far';
//   }
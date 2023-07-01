// Code your solution in this file!
function distanceFromHqInBlocks(arg) {
	if (arg >= 42) {
		return arg - 42;
	}
	if (arg < 42) {
		return 42 - arg;
	}
}

function calculateVertical(arg) {
	let distance = (distanceFromHqInBlocks(arg))*264;
	return distance;
}

function distanceFromHqInFeet(arg) {
	return calculateVertical(arg);
}

function distanceTravelledInFeet(arg1, arg2) {
	if (arg1 >= arg2) {
		return (arg1 - arg2) * 264;
	}
	else return (arg2 - arg1) * 264;
}

function calculatesFarePrice(start, destination) {
	distance = distanceTravelledInFeet(start, destination);
	if (distance > 2500) {
		return "cannot travel that far";
	}
	if (distance > 2000) {
		return 25;
	} 
	if (distance > 400 && distance < 2000) {
 		return distance * .02;
	}
	else
		return 0;
}

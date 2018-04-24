function distanceFromHqInBlocks(pickup){
	distance = Math.abs(pickup-42);
	return distance;
}

function distanceFromHqInFeet(pickup){
	distance = distanceFromHqInBlocks(pickup)*264;
	return distance;
}

function distanceTravelledInFeet(beginning, destination){
	distance = Math.abs(destination-beginning)*264;
	return distance;
}

function calculatesFarePrice(start, destination){
	distance = (distanceTravelledInFeet(start, destination));
	if(distance<400){
		price = 0;
	}
	else if(distance<2000){
		price = (distance-400)*0.02;
	}
	else if (distance<2500){
		price = 25;
	}
	else {
		return 'cannot travel that far'
	}
	return price
}
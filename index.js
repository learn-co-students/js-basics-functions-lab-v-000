function distanceFromHqInBlocks (block) {
	if (block > 42) {
	return block - 42;}
	else if (block < 42){
		return 42-block } 
	}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
  
}

function distanceTravelledInFeet(blockA, blockB) {
	if (blockA > blockB){
		const feet =  blockA - blockB ;
		return feet * 264
	} else if (blockA < blockB) {
		const feet =  blockB - blockA ;
		return feet * 264
	}
}


function calculatesFarePrice (start, destination){
	const distance = distanceTravelledInFeet(start, destination);

	if (distance <= 400) {
		return 0;
	}
	else if (distance > 400 && distance <= 2000) {
		return distance * .02;
	}

	else if (distance > 2000 && distance <= 2500) {
		return 25;
	}	
	else {
		return 'cannot travel that far';
	}
}


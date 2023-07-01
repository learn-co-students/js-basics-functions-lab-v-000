function calculateVertical(argument) {
	// body...
}


function distanceFromHqInBlocks(block) {
	return Math.abs(block-42);
}


function distanceFromHqInFeet(block) {
	return Math.abs(block-42)*264;
}

function distanceTravelledInFeet(block1,block2) {
	return Math.abs(block2-block1)*264;
}
function calculatesFarePrice(start, destination) {
	let dist = Math.abs(destination-start)*264;
	switch (true){
		case dist <= 264:
			return 0;
			break;
		case dist > 2500:
			return 'cannot travel that far';
			break;
		case dist > 2000:
			return 25;
			break;
		case dist >= 400 || dist <= 2000 :
			return .02*dist ;
			break;
	}

}
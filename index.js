// Code your solution in this file!
function distanceFromHqInBlocks(distance) {

	if (distance < 42){
		return 42 - distance
	} else {
		return distance - 42
	}
}

function distanceFromHqInFeet(distance){

 return distanceFromHqInBlocks(distance) * 264

}

function distanceTravelledInFeet(block1, block2){
	if (block1 < block2){
		return (block2 - block1)*264
	} else {
		return (block1 - block2)*264
	}
}

function calculatesFarePrice(block1, block2){
	distance = distanceTravelledInFeet(block1, block2)
	if (distance < 400){
		return 0
	} else if (distance < 2000){
		return (distance - 400) * 2 / 100
	} else if (distance < 2500){
		return 25
	} else {
		return "cannot travel that far"
	}

}

// Code your solution in this file!

// block - 264 feet
function calculateVertical(num1, num2) {
	let distance = (num2 - num1) * 264
	return distance > 0 ? distance : distance * -1
}

function distanceFromHqInBlocks(block) {
	return calculateVertical(42, block) / 264
}

function distanceFromHqInFeet(block) {
	return calculateVertical(42, block)
}

function distanceTravelledInFeet(block1, block2) {
	return calculateVertical(block1, block2)
}

function calculatesFarePrice(start, destination) {
	feet = calculateVertical(start, destination)
	if (feet <= 400) {
		return 0
	} else if (feet > 400 && feet <= 2000){
		fare = feet * .02
		return fare
	} else if (feet > 2000 && feet <= 2500){
		return 25
	} else {
		return 'cannot travel that far'
	}
}


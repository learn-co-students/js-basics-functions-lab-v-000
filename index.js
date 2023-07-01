// Code your solution in this file!
function distanceFromHqInBlocks (currentBlock) {
	result = currentBlock - 42
	return Math.abs(result)
}

function distanceFromHqInFeet (test) {
  variable_conversion = distanceFromHqInBlocks(test) * 264;
  return Math.abs(variable_conversion)
}

function distanceTravelledInFeet(first_block, last_block) {
	result2 = (first_block - last_block) * 264
	return Math.abs(result2)
}

function calculatesFarePrice(first_block, last_block) {
	const distance = distanceTravelledInFeet(first_block, last_block);
  	if (distance <= 400) {
    	return 0;
  	} 	else if (distance > 400 && distance  <= 2000) {
    	return (distance  - 400) * .02 ;
  	} 	else if (distance  > 2000 && distance  <= 2500 ) {
    	return 25;
  	} 	else {
    	return "cannot travel that far";
  	}	
}
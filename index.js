function distanceFromHqInBlocks(block){
	return Math.abs(42 - block)
}

function distanceFromHqInFeet(block){
	let blocks;
	{blocks =  distanceFromHqInBlocks(block);
   return (blocks * 264)
	}
}

function distanceTravelledInFeet(block1, block2){
	return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(start, destination){
	let distance;
	{distance = distanceTravelledInFeet(start, destination)
		if (distance <=400) {
			return 0
			}
		else if (distance > 400 && distance <=2000){
			return ((distance - 400) * .02)
		}	
		else if (distance >2000 && distance <=2500) {
			return 25
		}
		else {
			return "cannot travel that far"
		}
	}
}
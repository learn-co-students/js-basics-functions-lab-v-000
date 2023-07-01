// Code your solution in this file!
function distanceFromHqInBlocks(feet){
    if(42 < feet){
        return feet - 42;
    } else{
        return 42-feet;
    }
    
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start-end) * 264;

}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    }else if (distance < 2000){
        return 0.02 * (distance - 400);
    }else if (distance < 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
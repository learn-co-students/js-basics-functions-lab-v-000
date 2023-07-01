// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance >= 42){
        return distance - 42;
    }else{
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance){
    distanceInBlocks = distanceFromHqInBlocks(distance);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(start, end){
    if(start > end){
        return (start - end) * 264;
    }else{
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
    distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400){
        return 0;
    }else if(distanceInFeet > 400 && distanceInFeet < 2000){
        return distanceInFeet * 0.02;
    }else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}
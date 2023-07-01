// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    
    streetHQ = 42;
    calculation = (someValue - streetHQ);
        if (calculation < 0) { 
            return (Math.abs(calculation)); 
        }
        else {
            return calculation;
        }
}    
     
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end) {
    calculation = (start - end) * 264; 
        if (calculation < 0) {
            return (Math.abs(calculation));
        }
        else {
            return calculation;
        }
}       

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
//(remember the first 400 feet are free!)
        if (distanceTravelledInFeet(start, destination) <= 400) {
            return 0;
        }
//charges 2 cents per foot when total feet travelled is between 400 and 2000 
        else if (distanceTravelledInFeet(start, destination) <= 2000) {
        amount = (distanceTravelledInFeet(start, destination) - 400) * .02;
            return amount;
        }
//charges 25 dollars for a distance over 2000 feet
        else if (distanceTravelledInFeet(start, destination) < 2500) {
            return 25;
        }
//does not allow rides over 2500 feet
        else {   
            return "cannot travel that far";
        }
}



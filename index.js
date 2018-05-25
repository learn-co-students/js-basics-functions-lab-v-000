function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(42 - pickupLocation)
};

function distanceFromHqInFeet(pickupLocation){
    return Math.abs(distanceFromHqInBlocks(pickupLocation)*264)
};

function distanceTravelledInFeet(start, destination){
    const block = 264;
    return Math.abs((start - destination)*block)
};

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    let fare; 
        if (feet <= 400){
            fare = 0
        }else if (feet > 400 && feet <= 2000){
            fare = (feet - 400) * 0.02
        }else if (feet > 2000 && feet <= 2500){
            fare = 25;
        }else if (feet > 2500){
            fare = "cannot travel that far";
    }
    return fare;
};
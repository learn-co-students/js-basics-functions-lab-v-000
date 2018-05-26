//using true to make case statement work 

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    let fare; 
    switch(true){
        case (feet <= 400):
            return fare = 0
        case (feet > 400 && feet <= 2000):
            return fare = (feet - 400) * 0.02
        case (feet > 2000 && feet <= 2500):
            return fare = 25;
        case (feet > 2500):
            return fare = "cannot travel that far";
        default:
            return fare = "default";
    }
};
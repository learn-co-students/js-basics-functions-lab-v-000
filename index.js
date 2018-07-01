function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
    return Math.abs(distanceFromHqInBlocks(street) * 264)
}

function distanceTravelledInFeet(block_one, block_two) {
    return Math.abs((block_one - block_two) * 264)
}

function calculatesFarePrice(start, destination) {
    let feet;
    feet = distanceTravelledInFeet(start, destination);
    let price;
    switch (true) {
        case (feet < 400):
            return price = 0;
        case (feet > 400) && (feet <= 2000):
            return price = (feet - 400) * .02;
        case (feet > 2000) && feet <= 2500:
            return price = 25
        case (feet > 2500):
            return 'cannot travel that far'
    }
}
function distanceFromHqInBlocks(bl) {
    if (bl > 42) {
        return (bl - 42);
    } else {
        return (42 - bl);
    }
}

function distanceFromHqInFeet(bl) {
    return (distanceFromHqInBlocks(bl) * 264);
}

function distanceTravelledInFeet(a, b) {
    distance = (a >= b)? a - b : b - a;
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else {
        return distance * 0.02;
    }
}

// Code your solution in this file!


function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42
    } else {
        return 42 - distance
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
    return end > start ? (end - start) * 264 : (start - end) * 264

}

function calculatesFarePrice(start, end) {
    let miles = 0
    miles = distanceTravelledInFeet(start, end)

        switch(true) {
            case miles < 2000 && miles > 400:
                return (miles - 400) * 0.02
            break
            case miles > 2000 && miles < 2500: 
                return 25
            break
            case miles > 2500: 
                return 'cannot travel that far'
            break
            default: 
                return 0
    
        }
    

   


}
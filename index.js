function distanceFromHqInBlocks(block) {
    if(block >= 42) {
        return block - 42
    } else {
        return 42 - block
    }
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block)
    
    return blocks * 264
}

function distanceTravelledInFeet(block1, block2) {
    let total = block2 - block1
    
    if(Math.sign(total) === -1) {
        total = total * -1
    }
    
    return total * 264  
}

function calculatesFarePrice(block1, block2) {
    const feet = distanceTravelledInFeet(block1, block2)
    let price;
    
    switch(feet) {
        case feet <= 400:
            price = 0
            break;
        case feet > 400 && feet <= 2000:
            price = (feet - 400) * 0.2
            break;
            case feet > 2000 && feet < 2500
            price = 25
            break;
        case feet > 2500:
            return "cannot travel that far"
    }
    
    return price
}
 
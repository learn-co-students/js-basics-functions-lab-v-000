// Code your solution in this file!

function distanceFromHqInBlocks(block) {

  if (block > 42) {
    return block - 42;
  } else {
      return 42 - block;
    }

}

function distanceFromHqInFeet(block) {

  return distanceFromHqInBlocks(block) * 264;

}

function distanceTravelledInFeet(block1, block2) {

  if (block1 < block2) {
    return ((block2 - block1)*264);
  } else {
      return ((block1 - block2)*264);
    }

}

function calculatesFarePrice(start, destination) {

  const distance = distanceTravelledInFeet(start, destination)

  if (distance < 401) {
      return 0;
    } else if (distance < 2001) {
        return ((distance * 2) / 100);
      } else if (distance < 2501) {
          return 25;
        } else {
            return 'cannot travel that far'
        }
}

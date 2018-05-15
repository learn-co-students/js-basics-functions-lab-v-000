function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42
  } else if (blocks < 42) {
    return 42 - blocks
  }
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, end) {
  if (end > start) {
    return (end - start) * 264;
} else if (end < start) {
    return (start - end) * 264;
  };
}

function calculatesFarePrice(start,destination) {
  const distance = distanceTravelledInFeet(start,destination)
  if (distance < 400 ) {
    return 0
  } else if (distance >= 400 && distance < 2000) {
      return (distance - 400) * .02
  } else if (distance >= 2000 && distance < 2500) {
      return 25
  } else if (distance >= 2500) {
    return 'cannot travel that far'
  }
}

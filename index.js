function distanceFromHqInBlocks(num) {
  let result
  if (num > 42) {
    result = num - 42;
  }
  else if (num < 42) {
    result = 42 - num;
  }
  return result
}

function distanceFromHqInFeet(num) {
  let result = distanceFromHqInBlocks(num) * 264;
  return result
}

function distanceTravelledInFeet(x, y) {
  let result
  let blocks
  if (x > y) {
    blocks = x - y;
    result = blocks * 264
  }
  else if (y > x) {
    blocks = y - x;
    result = blocks * 264;
  }
  return result
}

function calculatesFarePrice(s, d) {
  let charge
  let feet
  let blocks = s - d
  if (blocks < 0) {
    blocks = blocks * (-1)
  }
  feet = 264 * blocks
  if (feet <= 400) {
    charge = 0
  }
  else if (feet > 400 && feet < 2000) {
    charge = (feet - 400) * .02
  }
  else if (feet > 2000 && feet < 2500) {
    charge = 25
  }
  else charge = 'cannot travel that far';
  return charge
}

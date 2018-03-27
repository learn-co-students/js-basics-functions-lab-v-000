function distanceFromHqInBlocks(num){
  return Math.abs(num-42);
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2){
  return Math.abs(num1 - num2) * 264;
}

function calculatesFarePrice(num1, num2){
  let price;
  num = distanceTravelledInFeet(num1, num2) - 400
  switch(true) {
    case num <= 0:
      return 0;
    case num <= 1600:
      price = num * .02
      return price;
    case num <=2100:
      return 25;
    case num >2100:
      return `cannot travel that far`;
  }
}

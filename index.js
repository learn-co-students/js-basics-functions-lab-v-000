// Code your solution in this file!
function distanceFromHqInBlocks(num){
  let dist;
  if(num > 42) {
    dist = num - 42;
  } else {
    dist = 42 - num
  }
  return dist;
}

function distanceFromHqInFeet(num){
let distft;
if(num > 42) {
  distft = (num - 42)*264;
} else {
  distft = (42 - num)*264;
}
return distft;
}

function distanceTravelledInFeet(num1, num2){
  let dist;
  if(num1 > num2) {
    dist = (num1- num2)*264;
  } else {
    dist = (num2 - num1)*264;
  }
  return dist;
}

function calculatesFarePrice(num1, num2){
  dist = distanceTravelledInFeet(num1,num2)
  let stm;
  let price;
  if (dist<=400){
    price = 0;
  }else if (dist>400 && dist<=2000){
    price = (dist - 400)*0.02
  }else if (dist>2000 && dist<=2500){
price = 25;
  }else {
  return  stm = "cannot travel that far";
  }
  return price;
  }

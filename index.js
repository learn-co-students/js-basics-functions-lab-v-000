// Code your solution in this file!
function distanceFromHqInBlocks(number){

  const hq = 42;

  return number >= hq ? number - hq : hq - number;


}
function distanceFromHqInFeet(number){

  return distanceFromHqInBlocks(number) * 264;



}


function distanceTravelledInFeet(loc1, loc2){

  let blocks = loc1 >= loc2 ? loc1 - loc2 : loc2 - loc1;
  return blocks * 264;

}




function calculatesFarePrice(start, destination){

  let distance =  distanceTravelledInFeet(start, destination);
  let fare = 0;
  if(distance < 400){
    return fare;
  }else if(distance > 2500){
    return 'cannot travel that far';
  }else if (distance > 2000){
    return fare = 25
  }else{
    return (distance - 400) * 2 / 100;
  }

}

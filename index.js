function distanceFromHqInBlocks(blocksAway){
  const headquarters = 42
  let distanceInBlocks = Math.abs(headquarters - blocksAway )
  return distanceInBlocks
}

function distanceFromHqInFeet (distanceAway) {
 const blocksAwayFromHQ =  distanceFromHqInBlocks(distanceAway);
 let distanceAwayInFeet = (blocksAwayFromHQ * 264)
 return distanceAwayInFeet
}

function distanceTravelledInFeet(start, end) {
  let blocksTravelled = Math.abs(start-end);
  let feetTravelled = blocksTravelled * 264;
  return feetTravelled;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start,destination);
  let fare = 0;

 if (distance < 400){
    return fare + 0;
 }
  else if (distance > 400 && distance < 2000 ){
    return fare = fare + (distance * 0.02);
  }
 else if (distance > 2000 && distance <= 2500){
   return fare = 25
 }
 else if (distance > 2500 ){
   return 'cannot travel that far'
 }

}

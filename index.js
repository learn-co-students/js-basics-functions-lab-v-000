// Code your solution in this file!

function distanceFromHqInBlocks(starting_block, ending_block) {
  (starting_block - ending_block)
  console.log(result);
}

function distanceFromHqInFeet(distanceFromHqInBlocks) {
  (distanceFromHqInBlocks)* 264
  console.log(result);
}

function calculatesFarePrice(distanceFromHqInFeet) {
  if (distanceFromHqInFeet < 400) {
    console.log(0);
  } else if (distanceFromHqInFeet > 400 && < 2000) {
    console.log(.02 * distanceFromHqInFeet);
  }
   else if (distanceFromHqInFeet > 2000 && < 2500) {
    console.log(25);
   }
   else {
     console.log ("cannot travel that far")
   }
}

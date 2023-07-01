// Code your solution in this file!
const hq_block = 42

function distanceFromHqInBlocks(pickup_street_number) {

  if (pickup_street_number > hq_block){
    return (pickup_street_number - hq_block)
  } else if (pickup_street_number < hq_block) {
    return (hq_block - pickup_street_number)
  }

}

function distanceFromHqInFeet(pickup_street_number) {
  let number_of_blocks = distanceFromHqInBlocks(pickup_street_number)
  return (number_of_blocks * 264)
}

function distanceTravelledInFeet(pickup_block, drop_off_block) {
  let blocks_travelled
  if (pickup_block > drop_off_block) {
    blocks_travelled = (pickup_block - drop_off_block)
  } else if (pickup_block < drop_off_block) {
    blocks_travelled = (drop_off_block - pickup_block)
  }
  return (blocks_travelled*264)
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return ((distanceTravelledInFeet(start, destination) - 400 ) * 0.02)
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
  } else
    return 'cannot travel that far'
}

// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if (blocks < 42){
  return (42 - blocks)
} else {
  return (blocks - 42);
}} // Calculates number of blocks from HQ

function distanceFromHqInFeet (blocks) {
  distanceFromHqInBlocks();
  if (blocks < 42){
  return (42 - blocks) * 264;
} else {
  return (blocks - 42) * 264;
}} // Used the same code from above to calculate feet from blocks by multiplying by 264

function distanceTravelledInFeet(start, destination){
if (start < destination){
  return (destination - start) * 264;
}else {
  return (start - destination) * 264;
}}//Repetitive I know..

function calculatesFarePrice(start, destination){
let distance = distanceTravelledInFeet(start, destination);
if (distance < 400){
  return 0
} if (distance >400 && distance <2000){;
return (distance * 0.02)
} if (distance > 2000 && distance < 2501){;
return 25;
} else {;
 return 'cannot travel that far';
}}

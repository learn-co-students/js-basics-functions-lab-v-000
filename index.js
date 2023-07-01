// Code your solution in this file!
function distanceFromHqInBlocks(destination)
{
  return Math.abs(destination - 42);
}
function distanceFromHqInFeet(destination)
{
  return distanceFromHqInBlocks(destination) * 264;
}
function distanceTravelledInFeet(start, destination)
{
  let blocks = Math.abs(destination - start);
  return blocks*264;
}
function calculatesFarePrice(start, destination)
{
  let feet = distanceTravelledInFeet(start, destination);

  if (feet <= 400)
  {
    return 0
  }
  else if (feet <2000)
  {
    return (feet-400)*0.02;
  }
  else if (feet < 2500)
  {
    return 25;
  }
  else {
    return "cannot travel that far";
  }

}

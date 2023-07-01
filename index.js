// Code your solution in this file!
function distanceFromHqInBlocks(distance)
     {
     return Math.abs(distance-42);
      }

function  distanceFromHqInFeet (distance)
      {
        return distanceFromHqInBlocks(distance)*264;
      }

function distanceTravelledInFeet(start,end)
      {
        return Math.abs(start-end)*264;
      }

function calculatesFarePrice(start,destination)
      {
          distance = distanceTravelledInFeet(start,destination);
        if (distance < 400)
              {return 0;}
        else if (distance>400 && distance<2000)
              {  return distance*0.02; }
        else if (distance>2000 && distance < 2500)
              {  return 25;  }
        else if(distance > 2500)
              {  return 'cannot travel that far'; }
      }

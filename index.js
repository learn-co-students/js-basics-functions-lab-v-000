// Code your solution in this file!

function distanceFromHqInBlocks(street){
  let result 
  switch(street >42){
  case true:
    result = street - 42
    break;
    case false:
      result = 42 - street
      break;
  }
  return result
  
}

function distanceFromHqInFeet(street){
    let result 
  switch(street >42){
  case true:
    result = (street - 42) * 264
    break;
    case false:
      result = (42 - street) * 264
      break;
  }
  return result
}


function distanceTravelledInFeet(start,finish){
  let result 
  let x
  x = start - finish; 
  (x<0) ? x = x * -1 : x;
  result = x *264
  return result 
  
}

function calculatesFarePrice(start, finish){
  let result 
  let x
  x = distanceTravelledInFeet(start, finish);
  switch(x <= 400){
    case true:
      result = 0
      break;
      case false:
        if(x> 2000 && x < 2500){
          result = 25;
          }else if(x < 2000){
            result = ((x-400) * .02);
          }
          else{
            result ="cannot travel that far"
          }
        break;
  }
  return result 
  
}




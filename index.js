// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(someValue >= 42){
        return someValue - 42 
    }else if(someValue < 42) {
        return 42 - someValue
    }
  }

  function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue)*264)
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start >= destination){
        return (start - destination ) * 264
    }else {
        return (destination - start) * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let pricedDistance = 0;
    let a; 
    let mesafe
    
    if(start - destination >= 0){
        mesafe = (start - destination) * 264
    }else{
        mesafe = (destination - start ) * 264
    }
   

    if(mesafe < 400){
        pricedDistance = 0
        return pricedDistance
    }else if(mesafe> 400 && mesafe < 2000 ){
        pricedDistance = (mesafe- 400) * 0.02
        return pricedDistance
    }else if(mesafe > 2000 && mesafe < 2500){
        pricedDistance = 25
        return pricedDistance
    }else{
        return 'cannot travel that far'
    }
    return pricedDistance
  }
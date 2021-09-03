// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(someValue > hq){
        return someValue - hq
    }
    else{
        return hq - someValue
    }
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(someVal1, someVal2){
    if(someVal1 > someVal2){
        return (someVal1 - someVal2) * 264
    }else{
        return (someVal2 - someVal1) * 264
    }
}

function calculatesFarePrice(someVal1, someVal2){
    const distanceInFeet = distanceTravelledInFeet(someVal1, someVal2)

    if(distanceInFeet < 400){
        return 0
    }
    else if(distanceInFeet < 2000){
        return (distanceInFeet - 400) * 0.02
    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}
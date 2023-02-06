
function publicBusFare(humanNumber){

    let resthuman1;
    let resthuman2;

  if(humanNumber % 50 !==0 || (humanNumber % 50) > 11 ){
resthuman1 = humanNumber % 50;
resthuman2 = resthuman1 % 11;
return resthuman2*250;
  }
    else if(humanNumber % 50 !==0 || humanNumber % 50 < 11){
      resthuman1 = humanNumber % 50;
      return resthuman1*250;
    }
    
   else{
    return 0;
   }

}

console.log(publicBusFare(365));
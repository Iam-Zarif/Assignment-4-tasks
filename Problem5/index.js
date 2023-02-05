

function isBestFriend (names){
  // console.log(names);
if(names[0].name.toLowerCase() === names[1].name.toLowerCase() ||  names[0].name.toLowerCase() === names[1].friend.toLowerCase() && names[0].friend.toLowerCase() === names[1].name.toLowerCase() || names[0].friend.toLowerCase() === names[1].friend.toLowerCase()){
return true ;
}
else{
  return false;
}
}


let theNames = [
  { name: "abul", friend: "babul" },

  { name: "Babul", friend: "abul" }
];

console.log(isBestFriend(theNames));
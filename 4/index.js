
let names = ['Zarif','Mostofa Fatin','I am the largest number in the earth','Mostofa Fatin Zarif', 'Ali', 'Amena'];

function bestFriend(FriendNames) {
  let biggerName = FriendNames[0];
  for (let i = 0; i < FriendNames.length; i++) {
    // console.log(bestFriendNamesnames[i]);

    if (biggerName.length < FriendNames[i].length) {
      biggerName = FriendNames[i];
    }
  }
  return biggerName ;
}
console.log(bestFriend(names));




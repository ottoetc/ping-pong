var pingPong = function(userNumber) {
  if(userNumber % 5 === 0) {
    return "pong";
  }
  if(userNumber % 3 === 0) {
    return "ping";
  }
  else if((userNumber % 5 !== 0) || (userNumber % 15 !== 0)) {
    return userNumber;
  }
};

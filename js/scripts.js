var pingPong = function(userNumber) {
  if(userNumber % 15 === 0) {
    return "pingpong";
  }
  else if(userNumber % 5 === 0) {
    return "pong";
  }
  else if(userNumber % 3 === 0) {
    return "ping";
  }
  else {
    return userNumber;
  }
};

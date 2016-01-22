var pingPong = function(userNumber) {
  if((userNumber % 3 !== 0) || (userNumber % 5 !== 0) || (userNumber % 15 !== 0)) {
    return userNumber;
  }
};

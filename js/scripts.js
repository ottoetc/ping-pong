var pingPong = function(userNumber) {
  var output;
  var loopCounter = 0;
  while(loopCounter < userNumber) {
    loopCounter = loopCounter + 1;
    if(loopCounter % 15 === 0) {
      output = "pingpong";
    }
    else if(loopCounter % 5 === 0) {
      output = "pong";
    }
    else if(loopCounter % 3 === 0) {
      output = "ping";
    }
    else {
      output = loopCounter;
    }
    console.log(output);
  }
  return output;



};

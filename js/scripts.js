var pingPong = function(userNumber) {
  var output = [];
  var loopCounter = 0;
  while(loopCounter < userNumber) {
    loopCounter = loopCounter + 1;
    if(loopCounter % 15 === 0) {
      output.push("pingpong");
    }
    else if(loopCounter % 5 === 0) {
      output.push("pong");
    }
    else if(loopCounter % 3 === 0) {
      output.push("ping");
    }
    else {
      output.push(loopCounter);
    }

  }
  console.log(output);
  return output;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("input#number").val();
    var pingPongOutput = pingPong(userInput);

  });
});

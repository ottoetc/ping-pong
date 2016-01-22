describe('pingPong', function() {
  it("will return the numbers if they are not divisible by 3, 5, or 15", function() {
    expect(pingPong(2)).to.eql([1, 2]);
  });
  it("will return 'ping' if the number is divisible by 3", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });
  it("will return 'pong' if the number is divisible by 5", function() {
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });
  it("will return 'pingpong' if the number is divisible by 15", function() {
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });
});

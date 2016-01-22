describe('pingPong', function() {
  it("will return the number if it is not divisible by 3, 5, or 15", function() {
    expect(pingPong(7)).to.equal(7);
  });
  it("will return 'ping' if the number is divisible by 3", function() {
    expect(pingPong(3)).to.equal("ping");
  });
  it("will return 'pong' if the number is divisible by 5", function() {
    expect(pingPong(5)).to.equal("pong");
  });
  it("will return 'pingpong' if the number is divisible by 15", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });
});

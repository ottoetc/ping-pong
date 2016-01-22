describe('pingPong', function() {
  it("will return the number if it is not divisible by 3, 5, or 15", function() {
    expect(pingPong(7)).to.equal(7);
  });
});

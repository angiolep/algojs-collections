var collections = require('../lib/index');
var expect = require('chai').expect;


describe('Traversable', function(){
  it('should define abstract methods', function() {
    var traversable = new collections.Traversable();
    var ex = 'UnsupportedOperationException';
    expect(traversable.foreach.bind(traversable)).to.throw(ex);
    expect(traversable.isEmpty.bind(traversable)).to.throw(ex);
    expect(traversable.head.bind(traversable)).to.throw(ex);
    expect(traversable.tail.bind(traversable)).to.throw(ex);
    expect(traversable.size.bind(traversable)).to.throw(ex);
    expect(traversable.map.bind(traversable)).to.throw(ex);
  });
});